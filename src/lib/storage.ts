import type { Category } from '../types';

// All state lives in the player's browser — v1 invariant: no backend.
const KEY = 'priors.v1';

export interface AnswerRecord {
  correct: boolean;
  guess: number;
  at: number;
}

export interface RoundRecord {
  at: number;
  score: number;
  total: number;
}

export interface Store {
  answers: Record<string, AnswerRecord[]>;
  rounds: RoundRecord[];
  feedback: Record<string, 1 | -1>;
}

function emptyStore(): Store {
  return { answers: {}, rounds: [], feedback: {} };
}

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<Store>;
      return {
        answers: parsed.answers ?? {},
        rounds: parsed.rounds ?? [],
        feedback: parsed.feedback ?? {},
      };
    }
  } catch {
    // Corrupted or unavailable (private mode) — start fresh.
  }
  return emptyStore();
}

function saveStore(store: Store): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    // Storage unavailable; the round still works, stats just don't persist.
  }
}

export function recordAnswer(id: string, guess: number, correct: boolean): void {
  const s = loadStore();
  (s.answers[id] ??= []).push({ correct, guess, at: Date.now() });
  saveStore(s);
}

export function recordRound(score: number, total: number): void {
  const s = loadStore();
  s.rounds.push({ at: Date.now(), score, total });
  saveStore(s);
}

export function setFeedback(id: string, value: 1 | -1): void {
  const s = loadStore();
  s.feedback[id] = value;
  saveStore(s);
}

export interface Lifetime {
  rounds: number;
  answered: number;
  correct: number;
  byCategory: Map<Category, { answered: number; correct: number }>;
  seenIds: Set<string>;
}

export function lifetimeStats(categoryOf: (id: string) => Category | undefined): Lifetime {
  const s = loadStore();
  const byCategory = new Map<Category, { answered: number; correct: number }>();
  const seenIds = new Set<string>();
  let answered = 0;
  let correct = 0;
  for (const [id, recs] of Object.entries(s.answers)) {
    seenIds.add(id);
    const cat = categoryOf(id);
    for (const r of recs) {
      answered += 1;
      if (r.correct) correct += 1;
      if (cat) {
        const c = byCategory.get(cat) ?? { answered: 0, correct: 0 };
        c.answered += 1;
        if (r.correct) c.correct += 1;
        byCategory.set(cat, c);
      }
    }
  }
  return { rounds: s.rounds.length, answered, correct, byCategory, seenIds };
}
