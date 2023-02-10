// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let a = [];
for (let i = 0; i < 100; i++) {
    const number = i
    if (number % 2 === 0) {
        // console.log(number)
        a.push(number)
    }
}
console.log(a)
//     b. заповнити його 50 непарними числами за допомоги циклу.
let b = [];
for (let i = 0; i < 100; i++) {
    const number = i
    if (number % 2 !== 0) {
        b.push(number)
    }
}
console.log(b)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let c = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 20; i++) {
    let numbers = getRandomInt(100);
    c.push(numbers)
}
console.log(c);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let d = [];

function getRandomInt3(min, max) {
    return Math.floor((Math.random() * max) + min);
}

for (let i = 0; i < 20; i++) {
    let numbers2 = getRandomInt3(8, 732);
    d.push(numbers2)
}
console.log(d);

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < d.length; i += 2) {
    const each3Element = d[i];
    console.log(each3Element)
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log('newtask')
for (let i = 0; i < d.length; i += 2) {
    const each3Element2 = d[i];
    if (each3Element2 % 2 === 0) {
        console.log(each3Element2)
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
console.log('newtask')
let dd = [];
for (let i = 0; i < d.length; i += 2) {
    const each3Element3 = d[i];
    if (each3Element3 % 2 === 0) {
        dd.push(each3Element3);
    }
}
console.log(dd);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
console.log('newtask111')
for (let i = 0; i < d.length; i++) {
    const each3Element4 = d[i];
    const each3Element5 = d[i + 1];
    if (each3Element5 % 2 === 0) {
        console.log(each3Element4);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('newtask666')
let result = 0;

let massive = [100, 250, 50, 168, 120, 345, 188];
for (let i = 0; i < massive.length; i++) {
    result = (result + massive[i]);
}
console.log(result / massive.length)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
console.log('newtask666')
let numbers2 = [];
let numbers3 = [233, 22, 11, 23, 41, 1, 1, 5, 1];
for (let i = 0; i < numbers3.length; i++) {
    const numbers3Element = numbers3[i] * 5;
    numbers2.push(numbers3Element);
}
console.log(numbers2);
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
console.log('newtask666')
let numbers4 = [];
let random = [true, 22, 'tres', 32, 22, 1, false, [], {}, 2, 'fsfsdfsfad'];
for (const randomElement of random) {
    if (typeof randomElement === 'number') {
        numbers4.push(randomElement)
    }
}
console.log(numbers4)
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
let usersWithCities = [];
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            user.adress = city;
        }
    }

}
usersWithCities=usersWithId
console.log(usersWithCities)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let numbers10 = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < numbers10.length; i++) {
    const numbers10Element = numbers10[i];
    if (numbers10Element%2===0){
        console.log(numbers10Element)
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numbers11 = [];
for (let i = 0; i < numbers10.length; i++) {
    const numbers11Element = numbers10[i];
    numbers11.push(numbers11Element)
}
console.log(numbers10)
console.log(numbers11)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let strings = '';
let letters = [ 'a', 'c', 'c'];
for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    strings+=letter;
}
console.log(strings);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let strings2= '';
let letters2 = [ 'a', 'b', 'c'];
let j =0;
while (j<letters2.length){
    const letter = letters2[j];
    strings2+=letter
    j++;
}
console.log(strings2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let strings3 = '';
let letters3 = [ 'a', 'q', 'c'];
for (const item of letters3) {
    strings3+=item;
}
console.log(strings3);

