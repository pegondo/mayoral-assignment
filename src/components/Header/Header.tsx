'use client';

import Searchbar from 'components/Searchbar/Searchbar';
import Sort from 'components/Sort/Sort';
import styles from './styles.module.css';
import { Order } from 'models/order';

interface Props {
  /** The current search condition. */
  search?: string;
  /** Callback for when the search condition is modified. */
  onSearch: (value: string) => void;
  /** The current order criteria. */
  order?: Order;
  /** Callback called when the sort criteria is modified. */
  setOrder: (order?: Order) => void;
}

/** React component that features a string searchbar and a sort criteria handler. */
const Header: React.FC<Props> = ({ search, onSearch, order, setOrder }) => {
  const handleSearchChange = ({ target: { value } }) => {
    onSearch(value);
  };

  return (
    <div className={styles.container}>
      <Sort order={order} setOrder={setOrder} />
      <Searchbar placeholder="Buscar" value={search} onChange={handleSearchChange} />
    </div>
  );
};

export default Header;
