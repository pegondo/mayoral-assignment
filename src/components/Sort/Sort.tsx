import { Plus, Minus } from 'lucide-react';
import styles from './styles.module.css';
import { Order } from 'models/order';
import clsx from 'clsx';

interface Props {
  order?: Order;
  setOrder: (order?: Order) => void;
}

const Sort: React.FC<Props> = ({ order, setOrder }) => {
  const isAscOrder = order === 'asc';
  const isDescOrder = order === 'desc';

  const handleSortChange = (newOrder: Order) => () => {
    const callbackOrder = order !== newOrder ? newOrder : undefined;
    setOrder(callbackOrder);
  };

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.icon, isDescOrder && styles.highlight)}
        onClick={handleSortChange('desc')}
      >
        <Minus strokeWidth={isDescOrder ? 7 : 5} />
      </div>
      <div
        className={clsx(styles.icon, isAscOrder && styles.highlight)}
        onClick={handleSortChange('asc')}
      >
        <Plus strokeWidth={isAscOrder ? 7 : 5} />
      </div>
    </div>
  );
};

export default Sort;
