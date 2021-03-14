import { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
/** Types */
import type { AppProps } from 'next/app';
/** Themes */
import { lightTheme, darkTheme, GlobalStyles } from '@themes/themeConfig';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  const darkmode = useDarkMode(true);
  const theme = darkmode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <button onClick={darkmode.toggle}>Switch Mode</button>
      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  );
}

export default MyApp;
