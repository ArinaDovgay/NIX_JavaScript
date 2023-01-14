// Завдання 1

function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

// Завдання 2

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
//alert( arr );
//alert( filtered );

// Завдання 3


function filterRangeInPlace(ar, a, b) {

    for (let i = 0; i < ar.length; i++) {
        let val = ar[i];

        if (val < a || val > b) {
            ar.splice(i, 1);
            i--;
        }
    }
}

let ar = [5, 3, 8, 1];

// Завдання 4

let arr1 = [5, 2, 1, -10, 8];

arr1.sort((a, b) => b - a);

//alert( arr1 );

// Завдання 5

let arr2 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr2) {
    return arr2.slice().sort();
}

let sorted = copySorted(arr2);

//alert(sorted);
//alert(arr2);

// Завдання 6

function calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

// Завдання 7

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

alert(names);

// Завдання 8

function sortByAge(arr3) {
    arr3.sort((a, b) => a.age - b.age);
}

let vaasya = { name: " Вася ", age: 25 };
let peetya = { name: " Петя ", age: 30 };
let maasha = { name: " Маша ", age: 28 };

let arr3 = [vaasya, peetya, maasha];

sortByAge(arr3);

alert(arr3[0].name);
alert(arr3[1].name);
alert(arr3[2].name);

// Завдання 9

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 29 };

let arr4 = [vasya, petya, masha];

alert(getAverageAge(arr4));

// Завдання 10

function unique(arr5) {
    let result = [];

    for (let str of arr5) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", " кришна ", ":-O"];

alert(unique(strings));

// Завдання 11

function unique(arr6) {
    return Array.from(new Set(arr6));
}

// Завдання 12

// Так, ці два лічильника незалежні. Другий лічильник покаже 0,1. 
// Є функція makeCounter; counter та counter2 записані в різні змінні та мають свою власну змінну в самій функції,
// тому варінт 2,3 не підходить;
// тобто це два різних виклика функції makeCounter

// Завдання 13

// Код буде працювати, тому що обидві вкладені функції мають доступ до змінної count
// alert(counter.up()); 1
// alert(counter.up()); 2
// alert(counter.down()); 1

// Завдання 14

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

alert(factorial(5));