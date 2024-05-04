// Функция для конвертации валют на JavaScript

const RUB_TO_USD = 0.015;
const USD_TO_RUB = 80;
const RUB_TO_EUR = 0.013;
const EUR_TO_RUB = 100;
const USD_TO_EUR = 0.93;
const EUR_TO_USD = 1.08;


function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === 'RUB' && toCurrency === 'USD') {
        return calculate(amount, RUB_TO_USD);
    } else if (fromCurrency === 'USD' && toCurrency === 'RUB') {
        return calculate(amount, USD_TO_RUB);
    } else if (fromCurrency === 'RUB' && toCurrency === 'EUR') {
        return calculate(amount, RUB_TO_EUR);
    } else if (fromCurrency === 'EUR' && toCurrency === 'RUB') {
        return calculate(amount, EUR_TO_RUB);
    } else if (fromCurrency === 'USD' && toCurrency === 'EUR') {
        return calculate(amount, USD_TO_EUR);
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
        return calculate(amount, EUR_TO_USD);
    } else {
        return 0;
    }
}
function calculate(amount, exchangeRate) {
    return amount * exchangeRate;
}

console.log(convertCurrency(100, 'RUB', 'EUR'));
console.log(convertCurrency(150, 'USD', 'RUB'));
console.log(convertCurrency(2000, 'RUB', 'DIR'));