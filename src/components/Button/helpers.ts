import type { ButtonProps } from './types';

import { cx } from '../../utils';

type PrepareButtonProps = {
  size: ButtonProps['size'];
  appearance: ButtonProps['appearance'];
  className: ButtonProps['className'];
  outlined: ButtonProps['outlined'];
};

const classes = {
  base: {
    all: 'flex items-center px-4 gap-3 justify-center py-1.5 transition-all duration-300 rounded shadow-sm text-base disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed',
    normal: 'text-white active:shadow-inner',
    outline:
      'bg-white border border-solid disabled:border-gray-200 disabled:bg-white',
  },
  primary: {
    normal: 'bg-blue hover:bg-blue-500 active:bg-blue-600',
    outline: 'text-blue border-blue hover:bg-blue-50 active:bg-blue-100',
  },
  secondary: {
    normal: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
    outline:
      'text-gray-500 border-gray-500 hover:bg-gray-100 active:bg-gray-200',
  },
  success: {
    normal: 'bg-green hover:bg-green-500 active:bg-green-600',
    outline: 'text-green border-green hover:bg-green-50 active:bg-green-100',
  },
  warning: {
    normal: 'bg-yellow hover:bg-yellow-500 active:bg-yellow-600',
    outline:
      'text-yellow border-yellow hover:bg-yellow-50 active:bg-yellow-100 disabled:text-yellow-dark',
  },
  danger: {
    normal: 'bg-red hover:bg-red-500 active:bg-red-600',
    outline:
      'text-red border-red hover:bg-red-50 active:bg-red-100 disabled:text-red-dark',
  },
  none: {
    normal: 'text-gray-600 active:shadow-inner',
    outline: 'bg-gray-150',
  },
};

const prepareClassName = ({
  size,
  appearance,
  className,
  outlined,
}: PrepareButtonProps) => {
  const styleVariant = outlined ? 'outline' : 'normal';

  return cx(
    'whitespace-nowrap',
    size === 'full' && 'w-full text-lg',
    size === 'small' && '!text-sm px-3',
    size === 'large' && 'text-lg px-5',
    classes.base.all,
    classes.base[styleVariant],
    classes[appearance][styleVariant],
    className
  );
};

export { prepareClassName };
