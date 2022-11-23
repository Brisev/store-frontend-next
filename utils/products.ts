export const calculateProductDiscount = (
  amount: number,
  discountType?: string,
  discount?: number
) => {
  let discountAmount, productAmount, percentage;
  if (discountType === "percentage") {
    discountAmount = amount;
    percentage = discount;
    const percentageCalc = Number(discount) / 100;
    const amountToDeduct = Number(amount) * percentageCalc;
    productAmount = amount - amountToDeduct;
  } else if (discountType === "fixed") {
    discountAmount = amount;
    productAmount = Number(amount) - Number(discount);
    const diffInPrices = Number(discount) / Number(amount);
    percentage = diffInPrices * 100;
  }
  return {
    discountAmount: discountAmount?.toLocaleString(),
    productAmount: productAmount?.toLocaleString(),
    percentage: `-${percentage?.toFixed(0)}%`,
  };
};
