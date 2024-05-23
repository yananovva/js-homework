
/*
    Дан массив строк ['10-02-2022','тест','11/12/2023','00/13/2022','41/12/2023'];
    Необходимо написать функцию, которая удаляла бы из массива все строки, которые нельзя перевести в дату
    (можно: 10-02-2022 и 11/12/2023) и возвращала новый массив вида:
    -   ['10-02-2022','12-11-2023']
*/

const length = 30;

// Автоматически сгенерированный массив дат по двум типам разделителя "/, -"
const inputDates = Array.from({ length }, () => {
    function randomNumber(min = 0, max = 35) {
        return Math.ceil(Math.random() * (max - min)) + min;
    }

    const factor = Math.random() > 0.5 ? '/' : '-';

    const dateArray = [randomNumber(), randomNumber(), randomNumber(1900, 2050)]
        .map((x) => x.toString().padStart(2, '0'));
    return dateArray.join(factor);
});

// Функция получения фильтрации и валидации массива строк в дату по условию, полученному через функцию
function getDates(array, fn) {
    return array.map(stringToArray).filter(fn).sort(sortDatePattern).map(formatDate);
}

// Функция форматирования результирующей массива даты [day, month, year] в строку
function formatDate(array) {
    return array.map((x, i) => (i === 2 ? x.padStart('0', 4) : x.padStart('0', 2))).join('-');
}

// Функция сортировки даты по возрастанию
function sortDatePattern(a, b) {
    let day, month, year;

    [day, month, year] = a;
    const dt1 = new Date(year, month - 1, day).getTime();

    [day, month, year] = b;
    const dt2 = new Date(year, month - 1, day).getTime();

    return dt1 - dt2;
}

// Функция преобразования строки в массив даты [day, month, year] в зависимости локали
function stringToArray(str) {
    let day, month, year;
    if (str.includes('/')) {
        [month, day, year] = str.split('/');
    } else if (str.includes('-')) {
        [day, month, year] = str.split('-');
    }
    if (!year || isNaN(day) || isNaN(month) || isNaN(year)) {
        return null;
    }
    return [day, month, year];
}

// Функция валидации корректности даты
function checkCorrectDate(array) {
    if (array === null) {
        return false;
    }

    [day, month, year] = array.map(Number);

    const LONG_MONTH_ARRAY = [1, 3, 5, 7, 8, 10, 12];

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    // Проверяем месяц
    if (month < 1 || month > 12 || year <= 0) {
        return false;
    }

    // Проверяем день
    if (day < 1 || day > 31) {
        return false;
    }

    if (day === 31 && !LONG_MONTH_ARRAY.includes(month)) {
        return false;
    }

    // Проверяем февраль и корректность дня в зависимости от високосности года
    if (month === 2 && day === 29 && !isLeapYear) {
        return false;
    }
    return true;
}

const res = getDates(inputDates, checkCorrectDate);
console.log(inputDates);
console.log(res);
