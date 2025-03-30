/** Interface representing a product. */
export interface Product {
  id: number;
  imageSrc: string;
  name: string;
  price: number;
  discountPercentage?: number;
  hasMoreColors?: boolean;
}
