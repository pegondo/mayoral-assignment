import { render, screen } from '@testing-library/react';
import Header, { Props } from './Header';

describe('<Header />', () => {
  const defaultProps: Props = {
    search: '<search>',
    onSearch: jest.fn(),
    order: 'asc',
    setOrder: jest.fn(),
  };

  const setup = (props: Props = defaultProps) => {
    render(<Header {...props} />);
    const element = screen.getByTestId('header');
    const sort = screen.getByTestId('sort');
    const searchbar = screen.getByTestId('searchbar');
    return { element, sort, searchbar };
  };

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });

  it('should render the <Sort /> component', () => {
    const { sort } = setup();
    expect(sort).toBeInTheDocument();
  });

  it('should render the <Searchbar /> component', () => {
    const { searchbar } = setup();
    expect(searchbar).toBeInTheDocument();
  });
});
