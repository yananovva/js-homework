// Решение
// Записываем входящее значение
const welcome = prompt(`Выберите язык:`);

// switch принимает значение от welcome и приводит к нижнему регистру с помощью "toLowerCase" функции
switch (welcome.toLowerCase()) {
    case 'en':
        console.log('Hello!');
        break;
    case 'ru':
        console.log('Здравствуйте!');
        break;
    case 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Error');
}