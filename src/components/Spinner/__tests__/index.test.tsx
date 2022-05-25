import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '..';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  //@ts-ignore
  console.error.mockRestore();
});

describe(Spinner, () => {
  it('snapshots', () => {
    const { container } = render(<Spinner appearance="primary" />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <section
          aria-label="spinner"
          class="border-2 border-solid border-gray-300 rounded-full animate-spin_faster border-r-blue-600 w-8 h-8"
          title="primary-spinner"
        />
      </div>
    `);
  });

  it('Should render correctly', () => {
    render(<Spinner appearance="primary" />);

    const spinner = screen.getByTitle(/primary-spinner/i);

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('border-r-blue-600');
  });

  it('Should render with lg size and with sm', () => {
    const { rerender } = render(<Spinner appearance="primary" size="lg" />);
    expect(screen.getByTitle(/primary-spinner/i)).toHaveClass('w-14 h-14');

    rerender(<Spinner appearance="danger" size="sm" />);
    expect(screen.getByTitle(/danger-spinner/i)).toHaveClass('w-4 h-4');
  });

  it('Should render with custom color', () => {
    const customColor = '#daa1a1';
    render(<Spinner customColor={customColor} />);

    expect(screen.getByTitle(/spinner/i)).toHaveAttribute(
      'style',
      'border-right-color: ' + customColor + ';'
    );
  });

  it('Should render with custom className', () => {
    render(<Spinner appearance="primary" className="custom-class" />);

    expect(screen.getByTitle(/primary-spinner/i)).toHaveClass('custom-class');
  });

  it('Should render throw error', () => {
    expect(() => {
      render(<Spinner />);
    }).toThrowError(
      'Spinner appearence must be one of this [primary, secondary, success, warning, danger, light] or custom color must be provided'
    );
  });
});
