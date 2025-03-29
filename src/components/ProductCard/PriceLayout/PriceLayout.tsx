import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
  price: number;
  discountPercentage?: number;
}

const computeDiscount = (originalPrice: number, discountPercentage?: number) => {
  if (!discountPercentage) return originalPrice;
  const pricePercentage = 100 - discountPercentage;
  return (originalPrice * pricePercentage) / 100;
};

const PriceLayout: React.FC<Props> = ({ price, discountPercentage }) => {
  const hasDiscount = !!discountPercentage;
  const discountedPrice = computeDiscount(price, discountPercentage);

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
