import { computePriceDiscount } from './price';

describe('computePriceDiscount()', () => {
  it('should return the original price if the discount is undefined', () => {
    expect(computePriceDiscount(100)).toBe(100);
    expect(computePriceDiscount(20)).toBe(20);
  });

  it('should return the original price if the discount is 0%', () => {
    expect(computePriceDiscount(100, 0)).toBe(100);
    expect(computePriceDiscount(20, 0)).toBe(20);
  });

  it('should return the right price if the discount is valid', () => {
    expect(computePriceDiscount(100, 20)).toBe(80);
    expect(computePriceDiscount(20, 10)).toBe(18);
  });

  it('should return the right price rounded to two decimals if the discount is valid', () => {
    expect(computePriceDiscount(50.5, 33)).toBe(33.84);
    expect(computePriceDiscount(22.25, 14)).toBe(19.14);
  });
});
