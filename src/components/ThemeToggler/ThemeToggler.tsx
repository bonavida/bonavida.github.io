import { useContext } from 'react';
/** Context */
import { ThemeContext } from '@context/themeContext';
/** Styles */
import styles from './ThemeToggler.module.scss';

const ThemeToggler = (): JSX.Element => {
  const { colorMode, setColorMode } = useContext(ThemeContext);

  const handleChange = ({ target: { checked } }) => {
    const checkedColorMode = checked ? 'dark' : 'light';
    setColorMode(checkedColorMode);
  };

  if (!colorMode) {
    return null;
  }

  return (
    <label className={styles.toggler} htmlFor="theme_toggler">
      <input
        id="theme_toggler"
        name="theme_toggler"
        type="checkbox"
        className={styles.togglerOriginal}
        checked={colorMode === 'dark'}
        onChange={handleChange}
      />
      <div className={styles.togglerFake} />
      <div className={styles.togglerBackground} />
    </label>
  );
};

export default ThemeToggler;
