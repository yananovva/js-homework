// Входные данные

const langEn = 'en';
const langRu = 'ru';
const langDe = 'de';

// Решение
const welcome = prompt(`Выберите язык:`);
switch (true) {
    case langEn === 'en':
        console.log('Hello!');
        break;
    case langRu === 'ru':
        console.log('Здравствуйте!');
        break;
    case langDe === 'de':
        console.log('Gutten tag!');
        break;
    default:
        console.log('Error');
}