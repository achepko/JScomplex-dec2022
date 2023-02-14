// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sRectangle(a,b) {
        let result = a*b;
        console.log(result)
        return result
}
sRectangle(2,2);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCircle(r) {
    const PI = 3.14;
    let result = PI*Math.pow(r,2);
    console.log(result)
    return result;
}
sCircle(3);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(r,h) {
    const PI = 3.14;
    let result = 2*PI*r*(r+h);
    console.log(result);
    return result;
}
sCylinder(2,4);
// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [1, 2, 'three', null, 5, undefined, '7', 8, 9, true, false];
function eachElement(array) {
    for (let i = 0; i < array.length; i++) {
        const arrayElement = array[i];
        console.log(arrayElement);
    }
}
eachElement(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(text) {
    document.write(`<p>${text}</p>`)
}
paragraph('adadasdas')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulli(li) {
    document.write(`<ul>
                      <li>${li}</li>
                      <li>${li}</li>
                      <li>${li}</li>
                    </ul>`)
}
ulli('text li ')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`<h1>task new</h1>`)
function ulli2(li,j) {
    document.write(`<ul>`);
    for (let i = 0; i < j; i++) {
        document.write(`<li>${li}</li>`);
    }
    document.write('</ul>');
}
ulli2('asd',6)


document.write(`<h1>task new</h1>`)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
function list(array) {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
}
list(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write(`<h1><u>task new</u></h1>`)
 let users = [
     {id: 1, name:'anton', age:26, status: false},
     {id: 2, name:'anna', age:22, status: false},
     {id: 3, name:'kristina', age:36, status: true},
     {id: 4, name:'sveta', age:56, status: false},
     {id: 5, name:'sabina', age:226, status: true},
     {id: 6, name:'sergei', age:16, status: false},
     {id: 7, name:'pasha', age:22, status: false},
     {id: 8, name:'oksana', age:223, status: true},
     {id: 9, name:'lena', age:23, status: false},
     {id: 10, name:'oleg', age:21, status: false},
     {id: 11, name:'tanya', age:264, status: true},
     {id: 12, name:'artur', age:23, status: false},
   ];
function newMassive(array) {
    document.write(`<div class="users">`)
    for (let i = 0; i < array.length; i++) {
    document.write(`<div class="user">`)
        const user = array[i];
        document.write(`<h2>${array[i].name}</h2>`)
        document.write(`<h3>${array[i].age}</h3>`)
        document.write(`<h4>${array[i].status}</h4>`)
    document.write(`</div>`)
    }
    document.write(`</div>`)
}
newMassive(users)
// - створити функцію яка повертає найменьше число з масиву
console.log('new task----------')
let numbers = [2,434,1,13131,3,44,100000000000];
function bigNumber(array) {
        let max = array[0];
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
    if (max < number){
        max = array[i]
        }
    }
    console.log(max)
}
bigNumber(numbers)
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let numbeeers = [1,2,10];
function sum(arr) {
    let suma = 0;
    for (const num of arr) {
        suma+=num
    }
    console.log(suma)
}
sum(numbeeers);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapM = [11,22,33,44];
function swap(arr,index1,index2){
    // for (let i = 0; i < arr.length; i++) {
        let temp = arr[index1];
        arr[index1]=arr[index2];
        arr[index2]=temp;
    // }
    console.log(arr);
}
swap(swapM,0,2)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let currencyMassive = [
//     {currency: 'USD', value: 40},
//     {currency: 'EUR', value: 42}
// ];
function exchange(sumUAH,currencies,exchangeCurrency) {
    for (const currency of currencies) {
        if (currency.currency === exchangeCurrency) {
            return (sumUAH / currency.value);
        }
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));;

