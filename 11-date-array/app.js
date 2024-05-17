// Входные данные

const dates = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023'];

// Решение

function filterValidDate(array) {
    const isValidDate = (date) => {
        return !isNaN(Date.parse(date));
    }
    return array.filter(date => isValidDate(date));
}

const filteredDates = filterValidDate(dates);
console.log(filteredDates);