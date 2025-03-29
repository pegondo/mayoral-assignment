import Searchbar from 'components/Searchbar/Searchbar';
import Sort from 'components/Sort/Sort';
import styles from './styles.module.css';
import { Order } from 'models/order';

interface Props {
  search?: string;
  onSearch: (value: string) => void;
  order?: Order;
  setOrder: (order?: Order) => void;
}

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
