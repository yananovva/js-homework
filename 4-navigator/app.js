// Входные данные

const positionLatitude = 0;
const positionLongitude = 0;
const destinationLatitude = 6;
const destinationLongitude = 10;

// Решение

const result = Math.sqrt(
    (destinationLatitude - positionLatitude) ** 2 +
    (destinationLongitude - positionLongitude) ** 2);
console.log(result);

