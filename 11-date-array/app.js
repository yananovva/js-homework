function processDateStrings(dateStrings) {
    const validDates = [];

    for (const dateString of dateStrings) {
        if (isValidDateFormat(dateString)) {
            const dateComponents = dateString.split(/[-/]/);
            const day = dateComponents[0].padStart(2, '0');
            const month = dateComponents[1].padStart(2, '0');
            const year = dateComponents[2];

            const formattedDate = `${day}.${month}.${year}`;
            validDates.push(formattedDate);
        }
    }

    return validDates;
}

function isValidDateFormat(dateString) {
    const dateComponents = dateString.split(/[-/]/);

    if (dateComponents.length !== 3) {
        return false;
    }

    const day = parseInt(dateComponents[0]);
    const month = parseInt(dateComponents[1]);
    const year = parseInt(dateComponents[2]);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return false;
    }

    if (month === 2) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            if (day > 29) {
                return false;
            }
        } else {
            if (day > 28) {
                return false;
            }
        }
    }
    return true;
}



const dates = ['10-02-2022', 'test', '11/12/2023', '00/13/2022', '41/12/2023'];
const validDates = processDateStrings(dates);
console.log(validDates);