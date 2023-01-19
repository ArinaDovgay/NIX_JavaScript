// Завдання 1

// Напишіть код, який отримає елемент <div>
document.body.childNodes[1]
document.body.firstElementChild
document.body.children[0]

// Напишіть код, який отримає елемент <ul> 
document.body.children[1]
document.body.lastElementChild

// Напишіть код, який отримає другий li ( з ім'ям Піт)  
document.body.lastElementChild.lastElementChild

// Завдання 2

//  У elem.lastChild відсутнє nextSibling, бо він завжди останній. Тому відподь - так, завжди буде null
//  У другому питанні відповідь null є неправильною, тому що elem.children[0] як ми знаємо є дочірнім елементом, а отже перед ним можуть існувати інші елементи

// Завдання 3 (Виділіть ячейки по діагоналі)

let table1 = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
}

// Завдання 3 (Пошук елементів)

// Таблицю з id="age-table". 
let table = document.getElementById('age-table')

// Всі елементи label всередині цієї таблиці (їх три).
document.querySelectorAll('#age-table label')

// Перший td у цій таблиці (зі словом "Age ").
table.querySelector('td')

// Форму form з ім'ям name = "search". 
document.querySelector('form[name="search"]')

// Перший input у цій формі. 
form.querySelector('input')
form.getElementsByTagName('input')[0]

// Останній input у цій формі.
let inputs = form.querySelectorAll('input')
inputs[inputs.length - 1]

// Завдання 4

for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;

    title = title.trim();

    let count = li.getElementsByTagName('li').length;

    alert(title + ': ' + count);
}

// Завдання 5

// Результат коду буде 1. Тому що скрипт буде виконуватися в останній момент за схемою DOM

// Завдання 6

// Код буде показувати BODY. firstChild - дочірній елемент вузла

// Завдання 7

// Document належить до екземпляра класу HTMLDocument

alert(HTMLDocument.prototype.constructor === HTMLDocument); // true

// Завдання 8

function clear(elem) {
    while (elem.firstChild) {
        elem.firstChild.remove();
    }
}

// Завдання 9

// Тег <table> має вміщати в собі тільки теги, які мають відношення тільки до нього, через це текст виноситься перед table. 

// Завдання 10

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
    let data = prompt("Enter text for the list item", "");

    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}

// Завдання 11

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
