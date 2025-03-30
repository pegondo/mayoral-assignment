'use client';

import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { Search } from 'lucide-react';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>;

/** React component for a search bar. */
const Searchbar: React.FC<Props> = (props) => (
  <div className={styles.container}>
    <span className={styles.icon}>
      <Search />
    </span>
    <input {...props} type="text" className={styles.input} />
  </div>
);

export default Searchbar;
