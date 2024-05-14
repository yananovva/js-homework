// Входные данные

const arr = [3, 6, 9, 2];

// Решение

function filterNumbers(fn, array) {
    const filterArr = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            filterArr.push(array[i])
        }
    }
    return filterArr;
}

function isLessThanFive(number) {
    return number < 5;
}

function isMoreThanFive(number) {
    return number > 5;
}

console.log(filterNumbers(isLessThanFive, arr));
console.log(filterNumbers(isMoreThanFive, arr));