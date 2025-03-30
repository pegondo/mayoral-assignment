'use client';

import { Plus, Minus } from 'lucide-react';
import styles from './styles.module.css';
import { Order } from 'models/order';
import clsx from 'clsx';

export interface Props {
  /** The current sort criteria. */
  order?: Order;
  /** Callback called when the sort criteria is modified. */
  setOrder: (order?: Order) => void;
}

/** React component featuring a sort criteria handling layout. */
const Sort: React.FC<Props> = ({ order, setOrder }) => {
  const isAscOrder = order === 'asc';
  const isDescOrder = order === 'desc';

  const handleSortChange = (newOrder: Order) => () => {
    const callbackOrder = order !== newOrder ? newOrder : undefined;
    setOrder(callbackOrder);
  };

  return (
    <div className={styles.container} data-testid="sort">
      <div
        className={clsx(styles.icon, isDescOrder && styles.highlight)}
        onClick={handleSortChange('desc')}
        data-testid="sort-minus-button"
      >
        <Minus strokeWidth={isDescOrder ? 7 : 5} data-testid="sort-minus-icon" />
      </div>
      <div
        className={clsx(styles.icon, isAscOrder && styles.highlight)}
        onClick={handleSortChange('asc')}
        data-testid="sort-plus-button"
      >
        <Plus strokeWidth={isAscOrder ? 7 : 5} data-testid="sort-plus-icon" />
      </div>
    </div>
  );
};

export default Sort;
