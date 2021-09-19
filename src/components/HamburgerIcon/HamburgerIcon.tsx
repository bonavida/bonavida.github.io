import { useEffect, useState } from 'react';
import cx from 'classnames';
/** Styles */
import styles from './HamburgerIcon.module.scss';

type HamburgerIconProps = {
  onToggle: () => void;
  isMenuOpen: boolean;
};

const HamburgerIcon = ({
  onToggle,
  isMenuOpen,
}: HamburgerIconProps): JSX.Element => {
  const iconClassNames = cx(styles.hamburgerIcon, {
    [styles.hamburgerIconOpen]: isMenuOpen,
  });

  return (
    <div className={styles.hamburgerIconWrapper}>
      <button type="button" className={iconClassNames} onClick={onToggle}>
        <div className={styles.hamburgerBarOne} />
        <div className={styles.hamburgerBarTwo} />
        <div className={styles.hamburgerBarThree} />
      </button>
    </div>
  );
};

export default HamburgerIcon;
