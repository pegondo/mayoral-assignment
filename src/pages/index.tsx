import Header from 'components/Header/Header';
import fs from 'fs';
import { Order } from 'models/order';
import { Product } from 'models/product';
import { NextPage } from 'next';
import path from 'path';
import { useEffect, useState } from 'react';
import GridLayout from 'components/GridLayout/GridLayout';
import ProductCard from 'components/ProductCard/ProductCard';
import { computePriceDiscount } from '../../utils/price';
import Divider from 'components/Divider/Divider';

interface Props {
  initialData: Product[];
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData) as Product[];

  return { props: { initialData: data } };
}

const HomePage: NextPage<Props> = ({ initialData: initialProducts }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [search, setSearch] = useState<string>();
  const [order, setOrder] = useState<Order>();

  // Filter the products.
  useEffect(() => {
    const filteredProducts = !search
      ? initialProducts
      : initialProducts.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase()),
        );
    setProducts(filteredProducts);
  }, [search, initialProducts]);

  // Sort the products.
  useEffect(() => {
    const sortedProducts = !order
      ? initialProducts
      : [...initialProducts].sort((product1, product2) => {
          const product1Price = computePriceDiscount(product1.price, product1.discountPercentage);
          const product2Price = computePriceDiscount(product2.price, product2.discountPercentage);
          return order === 'desc' ? product1Price - product2Price : product2Price - product1Price;
        });
    setProducts(sortedProducts);
  }, [order, initialProducts]);

  const handleAdd = (name: string) => () => {
    alert(`Añadido ${name}`);
  };

  return (
    <div>
      <Header search={search} onSearch={setSearch} order={order} setOrder={setOrder} />
      <Divider />
      <GridLayout>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAdd(product.name)} />
        ))}
      </GridLayout>
    </div>
  );
};

export default HomePage;
