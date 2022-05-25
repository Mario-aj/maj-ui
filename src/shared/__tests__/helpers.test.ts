import { BG_APPEARANCE, TEXT_APPEARANCE, cx } from '../helpers';

describe('Helpers', () => {
  it('should return correct background class names', () => {
    expect(BG_APPEARANCE.danger).toBe('bg-red-500');
    expect(BG_APPEARANCE.primary).toBe('bg-blue-500');
    expect(BG_APPEARANCE.secondary).toBe('bg-gray-500');
    expect(BG_APPEARANCE.success).toBe('bg-green-500');
    expect(BG_APPEARANCE.warning).toBe('bg-orange-500');
  });

  it('should return correct text class names', () => {
    expect(TEXT_APPEARANCE.danger).toBe('text-red-500');
    expect(TEXT_APPEARANCE.primary).toBe('text-blue-500');
    expect(TEXT_APPEARANCE.secondary).toBe('text-gray-500');
    expect(TEXT_APPEARANCE.success).toBe('text-green-500');
    expect(TEXT_APPEARANCE.warning).toBe('text-orange-500');
  });

  it('should return correct class names', () => {
    expect(cx('test', 'test2')).toBe('test test2');
    expect(cx('test', 'test2', 'test3')).toBe('test test2 test3');
    expect(cx('test', false && 'not-appear', true && 'appear')).toBe(
      'test appear'
    );
  });
});
