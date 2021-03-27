import { useState, useEffect, createContext } from 'react';
/** Themes */
import { COLORS } from '@themes/colors';
/** Types */
import { ColorMode } from '@customTypes/theme';

export type ThemeContextProps = {
  colorMode: ColorMode;
  setColorMode: (value: ColorMode) => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (value: ColorMode) => {
    const root = window.document.documentElement;

    // Update state
    rawSetColorMode(value);

    // Update localStorage
    localStorage.setItem('color-mode', value);

    // Update each color
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--${name}`;
      root.style.setProperty(cssVarName, colorByTheme[value]);
    });

    root.style.setProperty('--initial-color-mode', value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
