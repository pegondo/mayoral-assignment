import { fireEvent, render, screen } from '@testing-library/react';
import HomePage, { Props } from '.';
import { Product } from 'models/product';

describe('<HomePage />', () => {
  const imageSrc =
    'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68';

  const products: Product[] = [
    {
      id: 1,
      imageSrc,
      name: '<product-1>',
      price: 100,
    },
    {
      id: 2,
      imageSrc,
      name: '<product-2>',
      price: 20,
    },
    {
      id: 3,
      imageSrc,
      name: '<product-3>',
      price: 200,
    },
    {
      id: 4,
      imageSrc,
      name: '<product-4>',
      price: 50,
    },
  ];

  const defaultProps: Props = {
    initialData: products,
  };

  const setup = (props: Props = defaultProps) => {
    render(<HomePage {...props} />);
    const element = screen.getByTestId('home');
    const header = screen.getByTestId('header');
    const divider = screen.getByTestId('divider');
    const grid = screen.getByTestId('grid');
    const plusButton = screen.getByTestId('sort-plus-button');
    const minusButton = screen.getByTestId('sort-minus-button');
    const search = screen.getByTestId('searchbar-input');
    return { element, header, divider, grid, plusButton, minusButton, search };
  };

  const getProductElement = (id: number) => {
    return screen.getByTestId(`product-id-${id}`);
  };

  const getAllProductElements = (element: HTMLElement) => {
    const elements = element.querySelectorAll('[data-testid*="product-id"]');
    return elements;
  };

  const getIdFromProductElement = (element: HTMLElement) => +element.dataset.testid.split('-')[2];

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });

  it('should render the header', () => {
    const { header } = setup();
    expect(header).toBeInTheDocument();
  });

  it('should render the divider', () => {
    const { divider } = setup();
    expect(divider).toBeInTheDocument();
  });

  it('should render the grid', () => {
    const { grid } = setup();
    expect(grid).toBeInTheDocument();
  });

  it('should render every product', () => {
    setup();

    products
      .map((product) => product.id)
      .forEach((id) => {
        const productElement = getProductElement(id);
        expect(productElement).toBeInTheDocument();
      });
  });

  it('should render the products in ascending order if the plus button is pressed', () => {
    const expectedProductIds = [...products]
      .sort((product1, product2) => product2.price - product1.price)
      .map((product) => product.id);
    const { element, plusButton } = setup();

    fireEvent.click(plusButton);

    const productElements = getAllProductElements(element);
    const productIds = Array.from(productElements).map(getIdFromProductElement);
    expect(productIds).toStrictEqual(expectedProductIds);
  });

  it('should render the products in descending order if the minus button is pressed', () => {
    const expectedProductIds = [...products]
      .sort((product1, product2) => product1.price - product2.price)
      .map((product) => product.id);
    const { element, minusButton } = setup();

    fireEvent.click(minusButton);

    const productElements = getAllProductElements(element);
    const productIds = Array.from(productElements).map(getIdFromProductElement);
    expect(productIds).toStrictEqual(expectedProductIds);
  });

  it('should render only the products that contain the search criteria if the search criteria is set', () => {
    const expectedProductIds = [2];
    const { element, search } = setup();

    fireEvent.change(search, { target: { value: '2' } });

    const productElements = getAllProductElements(element);
    const productIds = Array.from(productElements).map(getIdFromProductElement);
    expect(productIds).toStrictEqual(expectedProductIds);
  });
});
