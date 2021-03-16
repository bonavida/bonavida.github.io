import * as React from 'react';
import { ThemeProvider } from '@context/themeContext';
import DarkMode from './DarkMode';

interface ProvidersProps {
  children?: any;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => (
  <ThemeProvider>
    <DarkMode />
    {children}
  </ThemeProvider>
);

export default Providers;
