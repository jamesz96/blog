import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

type Theme = 'dark' | 'light';
export const theme: Writable<Theme> = writable<Theme>('light');

export function getPreferredTheme(): Theme {
  const { matches: isDarkTheme } = window.matchMedia('(prefers-color-scheme: dark)');
  return isDarkTheme ? 'dark' : 'light';
}

export function getSavedTheme(): Theme {
  return localStorage.getItem('theme') as Theme;
}
