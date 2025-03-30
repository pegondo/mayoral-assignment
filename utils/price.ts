/**
 * Computes the given price discount for the given original price.
 *
 * This function will malfunction if the `originalPrice` or the
 * `discountPercentage` provided are negative.
 * @param originalPrice The original price.
 * @param discountPercentage The discount (in percentage format).
 * @returns The discounted price of the product rounded to two decimals.
 */
export const computePriceDiscount = (originalPrice: number, discountPercentage?: number) => {
  if (!discountPercentage) return originalPrice;
  const pricePercentage = 100 - discountPercentage;
  const discountedPrice = (originalPrice * pricePercentage) / 100;
  return Math.round(discountedPrice * 100) / 100;
};
