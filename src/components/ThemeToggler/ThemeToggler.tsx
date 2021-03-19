import { useContext } from 'react';
import { ThemeContext } from '@context/themeContext';

const ThemeToggler = (): JSX.Element => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label htmlFor="theme_toggler">
      <input
        id="theme_toggler"
        name="theme_toggler"
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={(ev) => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      Dark
    </label>
  );
};

export default ThemeToggler;
