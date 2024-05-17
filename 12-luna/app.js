// Входные данные

let cardNumber = '4561-1213-4367-2612';

// Решение

function checkingCardNumber(number) {
    let totalSum = 0;
    let isSecondDigit = false;

    number = number.replace(/-/g, '');
    if (number.length !== 16) {
        return false;
    }
    if (!isOnlyNumbers(number)) {
        console.log('Неверный номер карты.');
        return;
    }

    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number[i]);
        if (isSecondDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        totalSum += digit;
        isSecondDigit = !isSecondDigit;
    }
    return totalSum % 10 === 0;
}

function isOnlyNumbers(number) {
    let result = true;
    for (const char of number) {
        if (isNaN(Number(char))) {
            result = false;
            break;
        }
    }
    return result;
}

// Проверка

if (checkingCardNumber(cardNumber)) {
    console.log('Номер карты корректен.');
} else {
    console.log('Номер карты некорректен.');
}