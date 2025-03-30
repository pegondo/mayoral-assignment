'use client';

import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { Search } from 'lucide-react';

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>;

/** React component for a search bar. */
const Searchbar: React.FC<Props> = (props) => (
  <div className={styles.container} data-testid="searchbar">
    <span className={styles.icon}>
      <Search data-testid="searchbar-icon" />
    </span>
    <input {...props} type="text" className={styles.input} data-testid="searchbar-input" />
  </div>
);

export default Searchbar;
