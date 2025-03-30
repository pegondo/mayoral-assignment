import { render, screen } from '@testing-library/react';
import Divider from './Divider';

describe('<Divider />', () => {
  const setup = () => {
    render(<Divider />);
    const element = screen.getByTestId('divider');
    return { element };
  };

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });
});
