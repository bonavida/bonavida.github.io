import { useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
/** Themes */
import { COLORS } from '@themes/colors';

/**
 * This component handles client-side color scheme switching. Specifically, if the
 * user were to have the site open and change their light/dark mode preferences on his/her OS.
 */
const DarkMode = (): null => {
  const darkMode = useDarkMode(false, { storageKey: null, onChange: null });

  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const preferedColorModeFromMQ = prefersDarkFromMQ ? 'dark' : 'light';
    const persistedPreference = localStorage.getItem('color-mode');
    const hasUsedToggle = typeof persistedPreference === 'string';

    const colorMode = hasUsedToggle
      ? persistedPreference
      : preferedColorModeFromMQ;

    const root: HTMLElement = document.documentElement;

    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--${name}`;

      root.style.setProperty(cssVarName, colorByTheme[colorMode]);
    });

    root.style.setProperty('--initial-color-mode', colorMode);
  }, [darkMode, darkMode.value]);

  return null;
};

export default DarkMode;
