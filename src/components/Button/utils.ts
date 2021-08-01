import classnames from 'classnames';
import { ButtonProps } from '.';

interface PreperButtonClassNameProps {
  outline: boolean;
  full: boolean;
  intent: ButtonProps['intent'];
  disabled: boolean;
  size: string;
  twitterButton: boolean;
}

const INTENT_CLASS_MAP = {
  base: 'px-4 py-1.5 text-sm transition-all duration-300 rounded flex items-center justify-center',
  secondary: {
    normal: 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400',
    outline: 'bg-white border border-gray-500',
  },
  primary: {
    normal: 'bg-blue-600 hover:bg-blue-500 active:bg-blue-800 text-white',
    outline:
      'bg-white text-blue-500 border border-blue-500 hover:bg-blue-200 active:border-0 active:bg-blue-100 active:text-blue-700',
  },
  success: {
    normal: 'bg-green-600 hover:bg-green-500 active:bg-green-800 text-white',
    outline:
      'bg-white text-green-500 border border-green-500 hover:bg-green-200 active:border-0 active:bg-green-100 active:text-green-700',
  },
  warning: {
    normal: 'bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-800 text-white',
    outline:
      'bg-white text-yellow-500 border border-yellow-500 hover:bg-yellow-200 active:border-0 active:bg-yellow-100 active:text-yellow-700',
  },
  danger: {
    normal: 'bg-red-600 hover:bg-red-500 active:bg-red-800 text-white',
    outline:
      'bg-white text-red-500 border border-red-500 hover:bg-red-200 active:border-0 active:bg-red-100 active:text-red-700',
  },
  dark: {
    normal: 'bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white',
    outline:
      'bg-gray-800 text-white border border-white hover:bg-gray-600 active:border-0 active:bg-gray-700',
  },
};

export const preperButtonClasseName = ({
  outline,
  full,
  intent,
  disabled,
  size,
  twitterButton,
}: PreperButtonClassNameProps): string => {
  const styleVariant = outline ? 'outline' : 'normal';

  const buttonClasseName = classnames(
    INTENT_CLASS_MAP.base,
    INTENT_CLASS_MAP[intent][styleVariant],
    {
      'opacity-30 cursor-not-allowed border-transparent': disabled,
      'w-full': full,
      'text-sm': size === 'small',
      'text-base': size === 'medium',
      'text-xl': size === 'large',
      'rounded-3xl': twitterButton,
    }
  );

  return buttonClasseName;
};
