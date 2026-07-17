import type { Category } from '../types';

/**
 * Category identity colors.
 *
 * Validated with the data-viz palette validator against this app's actual card
 * surfaces (#ffffff light / #17191d dark), in fixed slot order — not cycled:
 *   light: lightness band PASS · chroma PASS · adjacent CVD ΔE 9.1 PASS ·
 *          normal-vision ΔE 19.6 PASS · contrast WARN on 3 hues
 *   dark:  all six checks PASS
 *
 * The light-mode contrast WARN invokes the "relief rule": color must never be
 * the sole carrier of identity. It isn't — the category NAME is rendered
 * beside the color everywhere it appears (cards, chips, results rows).
 */
export const CATEGORY_COLOR: Record<Category, { light: string; dark: string }> = {
  Politics: { light: '#2a78d6', dark: '#3987e5' },
  Religion: { light: '#008300', dark: '#008300' },
  Society: { light: '#e87ba4', dark: '#d55181' },
  Economics: { light: '#eda100', dark: '#c98500' },
  'Drugs & Health': { light: '#1baf7a', dark: '#199e70' },
  'Justice & Crime': { light: '#eb6834', dark: '#d95926' },
  Science: { light: '#4a3aa7', dark: '#9085e9' },
  Environment: { light: '#e34948', dark: '#e66767' },
};

/** One-line framing shown on each category card. */
export const CATEGORY_BLURB: Record<Category, string> = {
  Politics: 'Guns, budgets, borders, abortion',
  Religion: 'Belief, practice, and what it predicts',
  Society: 'Family, identity, and the culture war',
  Economics: 'Wages, wealth, housing, trade',
  'Drugs & Health': 'What actually harms and heals',
  'Justice & Crime': 'Police, prisons, punishment',
  Science: 'What the evidence really says',
  Environment: 'Climate, energy, and waste',
};

/** CSS custom-property name carrying a category's hue. */
export function categoryVar(c: Category): string {
  return `--cat-${c.toLowerCase().replace(/[^a-z]+/g, '-')}`;
}
