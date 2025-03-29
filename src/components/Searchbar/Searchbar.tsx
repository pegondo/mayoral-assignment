import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { Search } from 'lucide-react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'> {}

const Searchbar: React.FC<Props> = (props) => (
  <div className={styles.container}>
    <span className={styles.icon}>
      <Search />
    </span>
    <input {...props} type="text" className={styles.input} />
  </div>
);

export default Searchbar;
