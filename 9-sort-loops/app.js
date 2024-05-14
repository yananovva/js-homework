// Входные данные
const oldArr = [1, 40, -5, 10, 0];

// Решение

function sorter(array) {
    const copyArray = [...array];
    for (let i = 0; i < copyArray.length; i++) {
        for (let j = i + 1; j < copyArray.length; j++) {
            if (copyArray[i] > copyArray[j]) {
                [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
            }
        }
    }
    return copyArray;
}

let newArr = sorter(oldArr);
console.log(newArr);