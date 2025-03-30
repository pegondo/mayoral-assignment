import { render, screen } from '@testing-library/react';
import GridLayout, { Props } from './GridLayout';

describe('<GridLayout />', () => {
  const defaultProps: Props = {
    children: <div data-testid="children">Children</div>,
  };

  const setup = ({ children }: Props = defaultProps) => {
    render(<GridLayout>{children}</GridLayout>);
    const element = screen.getByTestId('grid');
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
