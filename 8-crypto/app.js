let myTestPassword = 'пароль';

function crypto(password) {
    let splitPassword = password.split('');
    let middleIndex = Math.round(splitPassword.length / 2);
    let firstPart = password.slice(0, middleIndex);
    let secondPart = password.slice(middleIndex);

    [firstPart, secondPart] = [secondPart, firstPart];

    return secondPart.concat(firstPart);
}

let encrypt = crypto(myTestPassword);
console.log(encrypt);

function check(encrypt, password) {
    if (!encrypt || !password) {
        console.log('ERROR - Один из параметров пришел пустой');
        return false;
    }
    return crypto(encrypt) === password;
}

let resultOfCheck = check(encrypt, myTestPassword);
console.log(resultOfCheck);