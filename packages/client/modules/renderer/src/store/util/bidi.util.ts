import { writable } from 'svelte/store';

const RTL_LOCALE_PATTERN =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

export type Direction = 'ltr' | 'rtl';

const resolveDirectionality = (rawValue: string): Direction => {
  const value = rawValue?.toLowerCase() || '';

  if (
    value === 'auto' &&
    typeof navigator !== 'undefined' &&
    navigator?.language
  ) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }

  return value === 'rtl' ? 'rtl' : 'ltr';
};

export const dir = writable<Direction>(
  resolveDirectionality(
    document.body.dir || document.documentElement.dir || 'ltr',
  ),
);

const obs = new MutationObserver(() => {
  const newDir = resolveDirectionality(
    document.body.dir || document.documentElement.dir || 'ltr',
  );

  dir.set(newDir);
});

obs.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['dir'],
});
obs.observe(document.body, {
  attributes: true,
  attributeFilter: ['dir'],
});
