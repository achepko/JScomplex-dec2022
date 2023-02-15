// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

const PI = 3.14;
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let sRectangle = (a, b) => a * b;
console.log(sRectangle(3, 3));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sCircle = (r) => PI * r * r;
console.log(sCircle(4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let sCylinder = (r, h) => 2 * PI * r * (r + h);
console.log(sCylinder(2, 4));
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 2, 'three', null, 5, undefined, '7', 8, 9, true, false];
let eachElement = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        console.log(arrElement);
    }
}
eachElement(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraph = (text) => {
    document.write(`<p>${text}</p>`)
};
paragraph('sfsdafdsafds');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulli = (li) => {
    document.write(`<ul>
                        <li>${li}</li>
                        <li>${li}</li>
                        <li>${li}</li>
                   </ul>`);
}
ulli('text li');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulli2 = (li, j) => {
    document.write(`<ul>`)
    for (let i = 0; i < j; i++) {
        document.write(`<li>${li}</li>`)
    }
    document.write(`</ul>`);
}
ulli2('text li2', 4);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array2 = [1, 2, 'three', null, 5, undefined, '7', 8, 9, true, false];
let newMas = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ul>`);
}
newMas(array2);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'anton', age: 26, status: false},
    {id: 2, name: 'anna', age: 22, status: false},
    {id: 3, name: 'kristina', age: 36, status: true},
    {id: 4, name: 'sveta', age: 56, status: false},
    {id: 5, name: 'sabina', age: 226, status: true},
    {id: 6, name: 'sergei', age: 16, status: false},
    {id: 7, name: 'pasha', age: 22, status: false},
    {id: 8, name: 'oksana', age: 223, status: true},
    {id: 9, name: 'lena', age: 23, status: false},
    {id: 10, name: 'oleg', age: 21, status: false},
    {id: 11, name: 'tanya', age: 264, status: true},
    {id: 12, name: 'artur', age: 23, status: false},
];
let newlist = (array) => {
    document.write(`<div class="users">`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<div class="user">`)
        document.write(`<h2>${array[i].name}</h2>`)
        document.write(`<h3>${array[i].age}</h3>`)
        document.write(`<h4>${array[i].status}</h4>`)
        document.write(`</div>`);
    }
    document.write(`</div>`);
}
newlist(users);
// - створити функцію яка повертає найменьше число з масиву
let numbers = [1, 434, 1222, 13131, 3333, 44445, 100000000000];
let smallNumber = (array) => {
    let min = array[0];
    for (let i = 0; i < min.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    console.log(min);
}
smallNumber(numbers);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumM = [1, 2, 10];
let sum = (arr) => {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i];
    }
    console.log(x);
}
sum(sumM);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = [11, 22, 33, 44];
let swapFunction = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    console.log(arr);
}
swapFunction(swap, 0, 3);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchangeFuntion = (sumUAH, currencies, exchangeCurrency) => {
    for (const currency of currencies) {
        if (exchangeCurrency === currency.currency){
            return (sumUAH / currency.value);
        }
    }
}
console.log(exchangeFuntion(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));