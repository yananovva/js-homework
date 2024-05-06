let myTestPassword = 'пароль';

function crypto(password) {
    let splitPassword = password.toLowerCase().split('');

    let temp = splitPassword[2];
    splitPassword[2] = splitPassword[0];
    splitPassword[0] = temp;

    return splitPassword.join('');
}

let resultOfCrypto = crypto(myTestPassword);

console.log(resultOfCrypto);

function check(cryptoPassword, password) {
    let cryptoSplit = cryptoPassword.toLowerCase().split('');

    let temp = cryptoSplit[2];
    cryptoSplit[2] = cryptoSplit[0];
    cryptoSplit[0] = temp;

    return cryptoSplit.join('') === password;
}

let resultOfCheck = check(resultOfCrypto, myTestPassword);
console.log(resultOfCheck);