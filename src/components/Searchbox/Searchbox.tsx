import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** Hooks */
import useDebounce from '@hooks/useDebounce';
/** Components */
import Input from '@components/Input';
/** Styles */
import styles from './Searchbox.module.scss';

type SearchboxProps = {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  debounce?: number;
  onChange: (value: string) => void;
};

const Searchbox = ({
  name,
  defaultValue = '',
  placeholder,
  debounce = 500,
  onChange,
}: SearchboxProps): JSX.Element => {
  const [query, setQuery] = useState(defaultValue);
  const debouncedQuery = useDebounce(query, debounce);
  const mountedRef = useRef(false);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    mountedRef.current && onChange && onChange(debouncedQuery);
    if (!mountedRef.current) {
      mountedRef.current = true;
    }
  }, [debouncedQuery]);

  const handleChangeQuery = ({ target: { value = '' } }) => {
    setQuery(value.toLowerCase());
  };

  return (
    <div className={styles.SearchboxContainer}>
      <FontAwesomeIcon icon="search" className={styles.SearchboxIcon} />
      <Input
        name={name}
        className={styles.SearchboxInput}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChangeQuery}
      />
    </div>
  );
};

export default Searchbox;
