import React from 'react';
import { render, screen } from '@testing-library/react';

import { ProgressBar } from '..';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  //@ts-ignore
  console.error.mockRestore();
});

afterEach(jest.clearAllMocks);

describe(ProgressBar, () => {
  it('renders correctly', () => {
    render(<ProgressBar value={50} appearance="primary" />);

    expect(screen.getByRole('progressbar')).toMatchInlineSnapshot(`
      <section
        aria-label="progress-bar"
        class="w-full bg-gray-300 rounded-lg h-2"
        role="progressbar"
      >
        <div
          aria-label="progress"
          class="h-full rounded-lg overflow-hidden bg-blue-500"
          style="width: 50%;"
        />
      </section>
    `);
  });

  it('renders correctly with value and appearance', () => {
    render(<ProgressBar value={80} appearance="danger" />);

    const progress = screen.getByLabelText('progress');

    expect(progress).toBeInTheDocument();
    expect(progress).toHaveClass('bg-red-500');
    expect(progress).toHaveAttribute('style', 'width: 80%;');
  });

  it('renders correctly with custom color', () => {
    const customColor = 'rgb(255, 43, 65)';
    render(<ProgressBar value={80} customColor={customColor} />);

    expect(screen.getByLabelText('progress')).toHaveAttribute(
      'style',
      'width: 80%; background: ' + customColor + ';'
    );
  });

  it('renders correctly with size', () => {
    render(<ProgressBar value={30} appearance="success" size="xl" />);

    expect(screen.getByRole('progressbar')).toHaveClass('h-4');
  });

  it('renders correctly with className', () => {
    const className = 'h-8 w-24 bg-indigo-300 rounded custom-class';
    render(
      <ProgressBar value={30} appearance="success" className={className} />
    );

    expect(screen.getByRole('progressbar')).toHaveClass(className);
  });

  it('should render with differente appearance', () => {
    const { rerender } = render(
      <ProgressBar value={75} appearance="secondary" />
    );

    expect(screen.getByLabelText('progress')).toHaveClass('bg-gray-500');

    rerender(<ProgressBar value={75} appearance="success" />);
    expect(screen.getByLabelText('progress')).toHaveClass('bg-green-500');

    rerender(<ProgressBar value={75} appearance="warning" />);
    expect(screen.getByLabelText('progress')).toHaveClass('bg-orange-500');
    ('ProgressBar appearence must be one of this [primary, secondary, success, warning, danger, light] or customColor must be provided');
  });

  it('should render with value 100 if value is greatter than 100', () => {
    render(<ProgressBar value={150} appearance="success" />);

    expect(screen.getByLabelText('progress')).toHaveAttribute(
      'style',
      'width: 100%;'
    );
  });

  it('should render with value 0 if value is less than 0', () => {
    render(<ProgressBar value={-10} appearance="success" />);

    expect(screen.getByLabelText('progress')).toHaveAttribute(
      'style',
      'width: 0%;'
    );
  });

  it('should throw error whether appearance and customColor are not provided', () => {
    expect(() => {
      render(<ProgressBar value={75} />);
    }).toThrowError(
      'ProgressBar appearence must be one of this [primary, secondary, success, warning, danger, light] or customColor must be provided'
    );
  });
});
