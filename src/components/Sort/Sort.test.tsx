import { fireEvent, render, screen } from '@testing-library/react';
import Sort, { Props } from './Sort';

describe('<Sort />', () => {
  const defaultProps: Props = {
    setOrder: jest.fn(),
  };

  const setup = (props: Props = defaultProps) => {
    render(<Sort {...props} />);
    const element = screen.getByTestId('sort');
    const plusIcon = screen.getByTestId('sort-plus-icon');
    const minusIcon = screen.getByTestId('sort-minus-icon');
    const plusButton = screen.getByTestId('sort-plus-button');
    const minusButton = screen.getByTestId('sort-minus-button');
    return { element, plusIcon, minusIcon, plusButton, minusButton };
  };

  it('should render', () => {
    const { element } = setup();
    expect(element).toBeInTheDocument();
  });

  it('should render the plus icon', () => {
    const { plusIcon } = setup();
    expect(plusIcon).toBeInTheDocument();
  });

  it('should render the minus icon', () => {
    const { minusIcon } = setup();
    expect(minusIcon).toBeInTheDocument();
  });

  it('should call setOrder with the asc order when clicking the plus button with no initial sort order', () => {
    const setOrderMock = jest.fn();
    const { plusButton } = setup({ order: undefined, setOrder: setOrderMock });
    expect(plusButton).toBeInTheDocument();

    fireEvent.click(plusButton);

    expect(setOrderMock).toHaveBeenCalledTimes(1);
    expect(setOrderMock).toHaveBeenCalledWith('asc');
  });

  it('should call setOrder with the desc order when clicking the minus button with no initial sort order', () => {
    const setOrderMock = jest.fn();
    const { minusButton } = setup({ order: undefined, setOrder: setOrderMock });
    expect(minusButton).toBeInTheDocument();

    fireEvent.click(minusButton);

    expect(setOrderMock).toHaveBeenCalledTimes(1);
    expect(setOrderMock).toHaveBeenCalledWith('desc');
  });

  it('should call setOrder with the asc order when clicking the plus button with desc initial sort order', () => {
    const setOrderMock = jest.fn();
    const { plusButton } = setup({ order: 'desc', setOrder: setOrderMock });
    expect(plusButton).toBeInTheDocument();

    fireEvent.click(plusButton);

    expect(setOrderMock).toHaveBeenCalledTimes(1);
    expect(setOrderMock).toHaveBeenCalledWith('asc');
  });

  it('should call setOrder with the desc order when clicking the minus button with asc initial sort order', () => {
    const setOrderMock = jest.fn();
    const { minusButton } = setup({ order: 'asc', setOrder: setOrderMock });
    expect(minusButton).toBeInTheDocument();

    fireEvent.click(minusButton);

    expect(setOrderMock).toHaveBeenCalledTimes(1);
    expect(setOrderMock).toHaveBeenCalledWith('desc');
  });

  it('should call setOrder with undefined order when clicking the plus button with asc order', () => {
    const setOrderMock = jest.fn();
    const { plusButton } = setup({ order: 'asc', setOrder: setOrderMock });
    expect(plusButton).toBeInTheDocument();

    fireEvent.click(plusButton);

    expect(setOrderMock).toHaveBeenCalledTimes(1);
    expect(setOrderMock).toHaveBeenCalledWith(undefined);
  });

  it('should call setOrder with undefined order when clicking the minus button with desc order', () => {
    const setOrderMock = jest.fn();
    const { minusButton } = setup({ order: 'desc', setOrder: setOrderMock });
    expect(minusButton).toBeInTheDocument();

    fireEvent.click(minusButton);

    expect(setOrderMock).toHaveBeenCalledTimes(1);
    expect(setOrderMock).toHaveBeenCalledWith(undefined);
  });
});
