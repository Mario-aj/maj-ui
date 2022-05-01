import { compose, join, reject, isBoolean, isNil, flatten } from 'lodash/fp';

export const cx = (...args: unknown[]) =>
  compose(join(' '), reject(isBoolean), reject(isNil), flatten)(args);

export const TEXT_APPEARANCE = {
  primary: 'text-blue-500',
  secondary: 'text-gray-500',
  success: 'text-green-500',
  danger: 'text-red-500',
  warning: 'text-orange-500',
};

export const BG_APPEARANCE = {
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  success: 'bg-green-500',
  danger: 'bg-red-500',
  warning: 'bg-orange-500',
};
