// Завдання 1

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Завдання 2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}

// Завдання 3

function readNumber() {
    let num;

    do {
        num = prompt("Введіть число", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);

// Завдання 4

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

// Завдання 5

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

alert( randomInteger(1, 3) );

// Завдання 6

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("васz") );

// Завдання 7

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );

// Завдання 8

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength - 1) + '…' : str;
}

// Завдання 9

function extractCurrencyValue(str) {
    return +str.slice(1);
}

// Завдання 10

function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введіть номер", 0);


        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert( sumInput() );

// Завдання 11

// Відмінностей у поведінці цих обох функцій не буде, 
// тому що другий return (confirm) виконується, якщо if буде видавати помилку

// Завдання 12

function checkAge(age) {
    return (age > 18) ? true : confirm('Батьки дозволили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Батьки дозволили?');
}

// Завдання 13

function min(a, b) {
    return a < b ? a : b;
}

// Завдання 14

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
      result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Ступінь ${n} не підтримується, введіть натуральне число`);
} else {
    alert( pow(x, n) );
}

// Завдання 15

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Ви згодні?",
    () => alert("Ви погодилися."),
    () => alert("Ви скасували виконання.")
);

// Завдання 16

function accumulation() {
    let income = 3333
    let palm = 8000
    let costs = 1750
    return palm / (income - costs);
};

console.log(accumulation());


// Завдання 17

let arr = [-6, -8, -1, 5, 5, 5];

let result = 0;

for (var i = 0; i < arr.length; ++i) {
    if (arr[i] < 0) {
        result += arr[i];
    }
}

console.log(result);
