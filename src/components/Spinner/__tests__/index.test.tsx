import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '..';

describe(Spinner, () => {
  it('snapshots', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly', () => {
    render(<Spinner />);

    const spinner = screen.getByTitle(/primary-spinner/i);

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('border-r-blue-600');
  });

  it('Should render with lg size and with sm', () => {
    const { rerender } = render(<Spinner size="lg" />);
    expect(screen.getByTitle(/primary-spinner/i)).toHaveClass('w-14 h-14');

    rerender(<Spinner appearance="danger" size="sm" />);
    expect(screen.getByTitle(/danger-spinner/i)).toHaveClass('w-4 h-4');
  });

  it('Should render with custom color', () => {
    const customColor = '#daa1a1';
    render(<Spinner customColor={customColor} />);

    expect(screen.getByTitle(/primary-spinner/i)).toHaveAttribute(
      'style',
      'border-right-color: ' + customColor + ';'
    );
  });

  it('Should render with custom className', () => {
    render(<Spinner className="custom-class" />);

    expect(screen.getByTitle(/primary-spinner/i)).toHaveClass('custom-class');
  });
});
