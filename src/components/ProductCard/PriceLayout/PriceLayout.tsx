import clsx from 'clsx';
import styles from './styles.module.css';
import { computePriceDiscount } from '../../../../utils/price';

export interface Props {
  /** The product price. */
  price: number;
  /** The discount applied to the product (in percentage format). */
  discountPercentage?: number;
}

/**
 * React component that displays the price of a product. If a
 * `discountPercentage` is provided, the discounted price will also be display.
 */
const PriceLayout: React.FC<Props> = ({ price, discountPercentage }) => {
  const hasDiscount = !!discountPercentage;
  const discountedPrice = computePriceDiscount(price, discountPercentage);

  return (
    <div data-testid="price-layout">
      <p className={clsx(styles.price, hasDiscount && styles.lineThrough)} data-testid="price-p">
        {price} €
      </p>
      <p className={styles.discount} data-testid="discounted-price">
        {hasDiscount && `${discountedPrice} €(-${discountPercentage}%)`}
      </p>
    </div>
  );
};

export default PriceLayout;
