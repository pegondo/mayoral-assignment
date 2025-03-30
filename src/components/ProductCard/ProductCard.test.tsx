import { fireEvent, render, screen } from '@testing-library/react';
import ProductCard, { Props } from './ProductCard';

describe('<ProductCard />', () => {
  const defaultProps: Props = {
    product: {
      id: 1,
      imageSrc:
        'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
      name: '<name>',
      price: 100,
    },
    onAdd: jest.fn(),
  };

  const setup = (props: Props = defaultProps) => {
    render(<ProductCard {...props} />);
    const element = screen.getByTestId('product-card');
    const image = screen.getByTestId('product-image');
    const name = screen.getByTestId('product-name');
    const price = screen.getByTestId('price-layout');
    const hasMoreColors = screen.getByTestId('product-has-more-colors');
    const button = screen.getByTestId('product-add-button');
    return { element, image, name, price, hasMoreColors, button };
  };

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });

  it('should render the product image', () => {
    const { image } = setup();
    expect(image).toBeInTheDocument();
  });

  it('should render the product name', () => {
    const productName = '<product-name>';
    const { name } = setup({
      ...defaultProps,
      product: { ...defaultProps.product, name: productName },
    });
    expect(name).toBeInTheDocument();
    expect(name.textContent).toBe(productName);
  });

  it('should render the <PriceLayout /> component', () => {
    const { price } = setup();
    expect(price).toBeInTheDocument();
  });

  it("should render an empty has more colors section if the product doesn't have more colors", () => {
    const { hasMoreColors } = setup({
      ...defaultProps,
      product: { ...defaultProps.product, hasMoreColors: false },
    });
    expect(hasMoreColors).toBeInTheDocument();
    expect(hasMoreColors.textContent).toBe('');
  });

  it('should render the has more colors content if the product has more colors', () => {
    const { hasMoreColors } = setup({
      ...defaultProps,
      product: { ...defaultProps.product, hasMoreColors: true },
    });
    expect(hasMoreColors).toBeInTheDocument();
    expect(hasMoreColors.textContent).toBe('más colores');
  });

  it('should call onAdd when pressing the button', () => {
    const onAddMock = jest.fn();
    const { button } = setup({ ...defaultProps, onAdd: onAddMock });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(onAddMock).toHaveBeenCalledTimes(1);
  });
});
