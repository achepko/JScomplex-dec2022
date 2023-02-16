// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function smallestFrom3(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    }else {
        console.log('Some of numbers are similar')
    }
}

smallestFrom3(2, 4, 5)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function biggestFrom3(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    }else {
        console.log('Some of numbers are similar')
    }
}

biggestFrom3(2, 4, 5)
// - створити функцію яка повертає найбільше число з масиву
let array1 = [2131, 1, 322222222, 22, 33, 666];

function biggest(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}

biggest(array1);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let array2 = [1, 2, 3, 4, 5, 6];

function averageNumber(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        x += arr[i];
    }
    return x / arr.length;
}

console.log(averageNumber(array2));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function numChecker(...rest) {
    let min = rest[0];
    let max = rest[0];
    for (const num of rest) {
        if (min > num) min = num;
        if (max < num) max = num;
    }
    console.log(max);
    return min;
}

console.log(numChecker(22, 11, 13333, 12, 1, 10000000));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let massive = [];

function randomInMassive(arr, count) {
    for (let i = 0; i < count; i++) {
        let numbers = Math.round(Math.random() * 100);
        arr.push(numbers)
    }
    return arr
}

console.log(randomInMassive(massive, 5));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let massive1 = [];

function randomInMassive1(arr, count, limit) {
    for (let i = 0; i < count; i++) {
        let numbers = Math.round(Math.random() * limit);
        arr.push(numbers)
    }
    return arr
}

console.log(randomInMassive1(massive1, 5, 10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function reverse(arr) {
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr
}

console.log(reverse(massive1));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function sumAll2 (...rest){
    let x = rest[0];
    for (let i = 1; i < rest.length; i++) {
        x += rest[i];
    }
    return x;
}

console.log(sumAll2(2));

// function sumAll2() {
//     let zero = 0;
//     if (arguments.length>0) {
//         for (const argument of arguments) {
//             zero += argument}
//         }else {
//         zero = arguments[0];
//     }
//         return zero
// }
// console.log(sumAll2(3));

// function foo () {
//     let x = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         x += arguments[i];
//     }
//     return x;
// }
//
// console.log(foo(2,2,2));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

let a = [1,2,3];
let b = [2,3,4];

function sumMass(arr1,arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        let c = arr1[i]+ arr2[i];
        result.push(c)
    }
    return result
}

console.log(sumMass(a, b));

// function sumMass(arr1,arr2) {
//     let result = [];
//     if (arr1.length === arr2.length){
//         for (let i = 0; i < arr1.length; i++){
//             result.push(arr1[i]+=arr2[i]);
//         }
//     }else if (arr1.length !== arr2.length){
//
//     }
//     return result
// }
//
// console.log(sumMass(a, b));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let testM = [{name: 'Dima', age: 13}, {model: 'Camry'}];
function backer(arr) {
    let resultB = [];
    for (const object of arr) {
        for (const objectKey in object) {
            resultB.push(objectKey);
        }
    }
    return resultB;
}

console.log(backer(testM));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
function backer2(arr) {
    let resultB = [];
    for (const object of arr) {
        for (const objectKey in object) {
            resultB.push(object[objectKey]);
        }
    }
    return resultB;
}
console.log(backer2(testM));
