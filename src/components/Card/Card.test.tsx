import { render, screen } from '@testing-library/react';
import Card, { Props } from './Card';

describe('<Card />', () => {
  const defaultProps: Props = {
    children: <div data-testid="children">Children</div>,
  };

  const setup = ({ children }: Props = defaultProps) => {
    render(<Card>{children}</Card>);
    const element = screen.getByTestId('card');
    const childrenElement = screen.getByTestId('children');
    return { element, children: childrenElement };
  };

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });

  it('should render the children', () => {
    const { children } = setup();
    expect(children).toBeInTheDocument();
  });
});
