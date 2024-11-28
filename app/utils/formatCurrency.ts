export function formatCurrency(currency: number) {
    const formattedCurrency = currency.toFixed(2).replace('.', ',');

    return formattedCurrency;
};