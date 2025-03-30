import { render, screen } from '@testing-library/react';
import PriceLayout, { Props } from './PriceLayout';

describe('<PriceLayout />', () => {
  const defaultProps: Props = {
    price: 0,
  };

  const setup = (props: Props = defaultProps) => {
    render(<PriceLayout {...props} />);
    const element = screen.getByTestId('price-layout');
    const originalPrice = screen.getByTestId('price-p');
    const discountedPrice = screen.getByTestId('discounted-price');
    return { element, originalPrice, discountedPrice };
  };

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });

  it('should render the original price', () => {
    const expectedPrice = '10 €';
    const { originalPrice } = setup({ ...defaultProps, price: 10 });
    expect(originalPrice.textContent).toBe(expectedPrice);
  });

  it("shoud render and empty discounted price if the product doesn't have any discount", () => {
    const { discountedPrice } = setup({ price: 10, discountPercentage: undefined });
    expect(discountedPrice.textContent).toBe('');
  });

  it('should render the original price and the discounted price if the product has a discount', () => {
    const expectedOriginalPrice = '100 €';
    const expectedDiscountedPrice = '80 €(-20%)';
    const { originalPrice, discountedPrice } = setup({ price: 100, discountPercentage: 20 });
    expect(originalPrice.textContent).toBe(expectedOriginalPrice);
    expect(discountedPrice.textContent).toBe(expectedDiscountedPrice);
  });
});
