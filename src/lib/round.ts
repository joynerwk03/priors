import type { Question } from '../types';

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Sample a round: unseen questions first, spread across categories by
 * round-robin so no single worldview-flavor dominates a round, then shuffled.
 */
export function buildRound(all: Question[], seen: Set<string>, size = 10): Question[] {
  const byCat = new Map<string, Question[]>();
  for (const q of shuffle(all)) {
    const list = byCat.get(q.category);
    if (list) list.push(q);
    else byCat.set(q.category, [q]);
  }
  for (const list of byCat.values()) {
    list.sort((a, b) => Number(seen.has(a.id)) - Number(seen.has(b.id)));
  }

  const target = Math.min(size, all.length);
  const cats = shuffle([...byCat.keys()]);
  const picked: Question[] = [];
  while (picked.length < target) {
    let tookAny = false;
    for (const cat of cats) {
      if (picked.length >= target) break;
      const next = byCat.get(cat)?.shift();
      if (next) {
        picked.push(next);
        tookAny = true;
      }
    }
    if (!tookAny) break;
  }
  return shuffle(picked);
}
