// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let smallest1 = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    } else {
        console.log('Some of numbers are similar')
    }
}
smallest1(2, 1, 3);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let biggestFrom3 = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    } else {
        console.log('Some of numbers are similar')
    }
}
biggestFrom3(1, 2, 3);
// - створити функцію яка повертає найбільше число з масиву
let array1 = [2131, 1, 322222222, 22, 33, 666];

let biggest = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}
biggest(array1);
// - створити функцію яка повертає найменьше число з масиву
let smallest = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max > arr[i]) {
            max = arr[i];
        }
    }
    console.log(max);
}
smallest(array1);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let massive2 = [1, 2, 10];
let sumElements = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result
}
console.log(sumElements(massive2));
// - Дано натуральное число n. Выведите все числа от 1 до n.
let functionN = (n) => {
    for (let i = 1; i < n + 1; i++) {
        const nElement = i;
        console.log(nElement)
    }
}
functionN(10);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let functionAB = (A, B) => {
    if (A < B) {
        for (let i = A; i < B + 1; i++) {
            const nElement = i;
            console.log(nElement)
        }
    } else if (A > B) {
        for (let i = A; i >= B; i--) {
            const sElement = i;
            console.log(sElement)
        }
    }
}
functionAB(1, 5)
functionAB(5, 1)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
let foo = [9, 8, 0, 4];
let changer = (arr, i) => {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    console.log(arr)
}
changer(foo, 2)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let foo2 = [1, 0, 6, 0, 3];
let end0 = (arr) => {
debugger
    const arrSort = [];
    for (const item of arr) {
        if (item !== 0) {
            arrSort[arrSort.length] = item;
        }
    }
    for (const item of arr) {
        if (item === 0) {
            arrSort[arrSort.length] = item;
        }
    }
    return arrSort;
}
console.log(end0(foo2));
