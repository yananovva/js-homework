// Вводные данные

const hasLicence = true;
const age = 18;
const isDrunk = true;

// Решение

const canDrive = (age >= 18) && hasLicence && !isDrunk;
console.log(`Может водить машину? ${canDrive ? 'Может' : 'Не может'}`);