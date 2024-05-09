// Входные данные

const arr = [3,6,9,2];
const FILTER = 5;

// Решение

function filterNumbers(fn, array) {
    const filterArr = [];
    for (let i = 0; i < array.length; i++) {
        if (isPush(array[i])) {
            filterArr.push(array[i])
        }
    }
    return filterArr;
}

function isPush(element) {
    return element < FILTER;
}

console.log(filterNumbers(isPush(), arr));