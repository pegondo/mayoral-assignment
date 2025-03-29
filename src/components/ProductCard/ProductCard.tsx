'use client';

import Card from 'components/Card/Card';
import { Product } from 'models/product';
import Image from 'next/image';
import styles from './styles.module.css';
import clsx from 'clsx';
import PriceLayout from './PriceLayout/PriceLayout';

interface Props {
  product: Product;
}

// TODO: Consider splitting the component.

const ProductCard: React.FC<Props> = ({ product }) => {
  const handleAdd = () => {
    alert('element added');
  };

  return (
    <Card>
      <div className={styles.container}>
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={275}
          height={275}
          layout="responsive"
          objectFit="cover"
        />
        <div className={clsx(styles.text, styles.name)}>
          <span>{product.name}</span>
        </div>
        <PriceLayout price={product.price} discountPercentage={product.discountPercentage} />
        <p className={clsx(styles.text, styles.hasMoreColors)}>
          {product.hasMoreColors && 'más colores'}
        </p>
        <div>
          <button type="button" className={styles.button} onClick={handleAdd}>
            Añadir
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
