import { ButtonProps } from '.';
import { cx } from '../../shared/helpers';

type ComposeClassNameProps = Pick<
  ButtonProps,
  'appearance' | 'size' | 'full' | 'outlined' | 'className'
>;

const APPEARANCE = {
  base: {
    all: 'flex items-center justify-center gap-2 uppercase select-none whitespace-nowrap py-2.5 px-4 rounded cursor-pointer text-sm leading-5 font-medium tracking-wide transition-all duration-300 ease-in-out active:shadow-inner disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed',
    normal:
      'text-white border-none disabled:hover:bg-gray-300 disabled:active:bg-gray-300',
    outlined:
      'border border-solid bg-white disabled:border-gray-300 disabled:bg-white disabled:hover:bg-white disabled:hover:border-gray-300',
  },
  primary: {
    normal: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',
    outlined:
      'text-blue-500 border-blue-500 hover:bg-blue-100 active:bg-blue-200',
  },
  secondary: {
    normal: 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
    outlined:
      'text-gray-500 border-gray-500 hover:bg-gray-100 active:bg-gray-200',
  },
  success: {
    normal: 'bg-green-500 hover:bg-green-600 active:bg-green-700',
    outlined:
      'text-green-500 border-green-500 hover:bg-green-100 active:bg-green-200',
  },
  warning: {
    normal: 'bg-orange-500 hover:bg-orange-600 active:bg-orange-700',
    outlined:
      'text-orange-500 border-orange-500 hover:bg-orange-100 active:bg-orange-200',
  },
  danger: {
    normal: 'bg-red-500 hover:bg-red-600 active:bg-red-700',
    outlined: 'text-red-500 border-red-500 hover:bg-red-100 active:bg-red-200',
  },
};

const composeClassName = ({
  full,
  size,
  outlined,
  className,
  appearance,
}: ComposeClassNameProps) => {
  const variant = outlined ? 'outlined' : 'normal';

  return cx(
    full && 'w-full',
    size === 'sm' && 'py-1.5 px-3 text-xs leading-5',
    size === 'lg' && 'px-5 py-2.5 !text-base leading-7',
    APPEARANCE.base.all,
    APPEARANCE.base[variant],
    APPEARANCE[appearance][variant],
    className
  );
};

export { composeClassName };
