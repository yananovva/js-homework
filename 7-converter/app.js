// Функция для конвертации валют на JavaScript
    function converter(sum, currency, targetCurrency) {
    const USD = 90;
    const EUR = 100;

    currency = currency.toUpperCase();
    targetCurrency = targetCurrency.toUpperCase();

    switch (currency) {
        case 'USD':
            switch (targetCurrency) {
                case 'RUB':
                    return sum * USD;
                case 'EUR':
                    return (sum * USD) / EUR;
                default:
                    return null;
            }
        case 'EUR':
            switch (targetCurrency) {
                case 'RUB':
                    return sum * EUR;
                case 'USD':
                    return (sum * EUR) / USD;
                default:
                    return null;
            }
        case 'RUB':
            switch (targetCurrency) {
                case 'USD':
                    return sum / USD;
                case 'EUR':
                    return sum / EUR;
                default:
                    return null;
            }
        default:
            return null;
    }
}

const convertResult = converter(1500, 'rub', 'usd');
console.log(convertResult);

console.log(converter(100, 'RUB', 'USD')); // 1.09 $
console.log(converter(100, 'RUB', 'EUR')); // 0.89 €
console.log(converter(1000, 'EUR', 'USD')); // 1229.94 $
console.log(converter(1000, 'USD', 'EUR')); // 813.05 €
console.log(converter(1000, 'EUR', 'RUB')); // 112330.00 руб

console.log(converter(1500, 'EUR', 'RUB'));
console.log(converter(1500, 'USD', 'RUB'));

console.log(converter(10, 'RUB', 'EUR'));
console.log(converter(10, 'USD', 'EUR'));

console.log(converter(10, 'RUB', 'EURU'));
console.log(converter(10, 'USD', 'EUR'));

console.log(converter(10, 'RUB', 'EUR'));
console.log(converter(10, 'USDTY', 'EUR'));
