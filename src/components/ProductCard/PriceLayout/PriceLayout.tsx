import clsx from 'clsx';
import styles from './styles.module.css';
import { computePriceDiscount } from '../../../../utils/price';

interface Props {
  price: number;
  discountPercentage?: number;
}

const PriceLayout: React.FC<Props> = ({ price, discountPercentage }) => {
  const hasDiscount = !!discountPercentage;
  const discountedPrice = computePriceDiscount(price, discountPercentage);

  return (
    <div>
      <p className={clsx(styles.price, hasDiscount && styles.lineThrough)}>{price} €</p>
      <p className={styles.discount}>
        {hasDiscount && `${discountedPrice} €(-${discountPercentage}%)`}
      </p>
    </div>
  );
};

export default PriceLayout;
