'use client';

import Card from 'components/Card/Card';
import { Product } from 'models/product';
import Image from 'next/image';
import styles from './styles.module.css';
import clsx from 'clsx';
import PriceLayout from './PriceLayout/PriceLayout';

export interface Props {
  /** The product to display. */
  product: Product;
  /** Callback called when the add button is pressed. */
  onAdd: () => void;
}

/** React component that displays the given product details in a card format. */
const ProductCard: React.FC<Props> = ({ product, onAdd }) => (
  <Card>
    <div className={styles.container} data-testid="product-card">
      <div>
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={275}
          height={275}
          layout="responsive"
          objectFit="cover"
          data-testid="product-image"
        />
      </div>
      <div className={clsx(styles.text, styles.name)}>
        <span data-testid="product-name">{product.name}</span>
      </div>
      <PriceLayout price={product.price} discountPercentage={product.discountPercentage} />
      <p className={clsx(styles.text, styles.hasMoreColors)} data-testid="product-has-more-colors">
        {product.hasMoreColors && 'más colores'}
      </p>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={onAdd}
          data-testid="product-add-button"
        >
          Añadir
        </button>
      </div>
    </div>
  </Card>
);

export default ProductCard;
