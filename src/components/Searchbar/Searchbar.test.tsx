import { render, screen } from '@testing-library/react';
import Searchbar, { Props } from './Searchbar';

describe('<Searchbar />', () => {
  const defaultProps: Props = {};

  const setup = (props: Props = defaultProps) => {
    render(<Searchbar {...props} />);
    const element = screen.getByTestId('searchbar');
    const icon = screen.getByTestId('searchbar');
    const input = screen.getByTestId('searchbar-input');
    return { element, icon, input };
  };

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });

  it('should render the icon', () => {
    const { icon } = setup();
    expect(icon).toBeInTheDocument();
  });

  it('should render the input', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });
});
