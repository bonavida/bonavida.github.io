/*
This code comes from https://joshwcomeau.com/gatsby/dark-mode/
It uses the users' prefers-color-scheme media query to inline CSS variables into the :root of the page before any content is rendered.
*/

import Terser from 'terser';
import { COLORS } from './colors';

export const setColorsByTheme = (): void => {
  const colors = '🌈';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const preferedColorModeFromMQ = prefersDarkFromMQ ? 'dark' : 'light';
  const persistedPreference = localStorage.getItem('color-mode');
  const hasUsedToggle = typeof persistedPreference === 'string';

  const colorMode = hasUsedToggle
    ? persistedPreference
    : preferedColorModeFromMQ;

  const root = document.documentElement;

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });

  root.style.setProperty('--initial-color-mode', colorMode);
};

export const MagicScriptTag = (): JSX.Element => {
  const boundFn = String(setColorsByTheme).replace(
    "'🌈'",
    JSON.stringify(COLORS)
  );

  const calledFunction = `(${boundFn})()`;
  const minifiedFunction = Terser.minify(calledFunction);

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: minifiedFunction.code }} />;
};

// If user doesn't have JavaScript enabled, set variables properly in a
// head style tag anyways (light mode)
export const FallbackStyles = (): JSX.Element => {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) =>
      `${acc}\n--color-${name}: ${colorByTheme.light};`,
    ''
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};
