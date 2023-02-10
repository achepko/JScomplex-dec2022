// --створити масив з:
// - з 5 числових значень
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// - з 5 стічкових значень
let strings = ['1', '2', '3', '4', '5'];
console.log(strings);
// - з 5 значень стрічкового, числового та булевого типу
let mixed = [1, 2, true, 'text', false];
// - та вивести його в консоль
console.log(mixed);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let empty = [];
empty[0] = 'text';
empty[1] = 'text2';
empty[2] = 'text3';
console.log(empty)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
console.log('new task----------')
let x = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < x.length) {
    const xx = x[i];
    console.log(xx);
    i++;
}
//     2. перебрати його циклом for
console.log('new task----------')
for (let j = 0; j < x.length; j++) {
    const xx = x[j];
    console.log(xx)
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('new task----------')
let k = 0;
while (k < x.length) {
    const xx = x[k]
    if (xx % 2 !== 0) {
        console.log(xx)
    }
    k++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('new task----------')
for (let j = 0; j < x.length; j++) {
    const xx = x[j];
    if ((xx % 2) !== 0) {
        console.log(xx)
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('new task----------')
let c = 0;
while (c < x.length) {
    const xx = x[c]
    if (xx % 2 === 0) {
        console.log(xx)
    }
    c++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('new task----------')
for (let j = 0; j < x.length; j++) {
    const xx = x[j];
    if (xx % 2 === 0) {
        console.log(xx)
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log('new task----------')
for (let j = 0; j < x.length; j++) {
    let xx = x[j];
    if (xx % 3 === 0) {
        x[j] = "okten";
    }
}
console.log(x);

// 8. вивести масив в зворотньому порядку.
console.log('new task----------')
for (let j = x.length; j >= 0; j--) {
    console.log(x[j])
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

console.log('НЕ ЗРОЗУМІВ ЩО ПОТРІБНО РОБИТИ В 9 ЗАВДАННІ')

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log('new task----------')
let nubmers10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < nubmers10.length; j++) {
    const num10 = nubmers10[j];
    console.log(num10)
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log('new task----------')
let string10 = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10'];
for (let j = 0; j < string10.length; j++) {
    const str10 = string10[j];
    console.log(str10)
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log('new task----------')
let mixed2 = ['t1', 2, 't3', 't4', true, 't6', null, 't8', undefined, 't10'];
for (const mix of mixed2) {
    console.log(mix)
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log('new task----------')
let mixed3 = ['t1', 2, 't3', 't4', true, 't6', null, 't8', undefined, 't10'];
for (const mix of mixed3) {
    if (typeof mix === 'boolean') {
        console.log(mix)
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log('new task----------')
let mixed4 = ['t1', 2, 't3', 't4', true, 't6', null, 't8', undefined, 't10'];
for (const mix of mixed4) {
    if (typeof mix === 'number') {
        console.log(mix)
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log('new task----------')
let mixed5 = ['t1', 2, 't3', 't4', true, 't6', null, 't8', undefined, 't10'];
for (const mix of mixed5) {
    if (typeof mix === 'string') {
        console.log(mix)
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
console.log('new task----------')
let massive0 = [];
massive0[0] = 'element1';
massive0[1] = 'element';
massive0[2] = 'element1';
massive0[3] = 'element1';
massive0[4] = 'element1';
massive0[5] = 'element1';
massive0[6] = 'element1';
massive0[7] = 'element1';
massive0[8] = 'element1';
massive0[9] = 'element1';
console.log(massive0)
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('new task----------')
document.write('new task ----')
for (let j = 0; j < massive0.length; j++) {
    console.log(`step:`, j);
    document.write(`step:`, j)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('new task----------')
document.write('new task ----')
for (let j = 0; j < 100; j++) {
    console.log('step:', j)
    document.write('step:', j)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('new task----------')
document.write('new task ----')
for (let j = 0; j < 100; j += 2) {
    console.log('step:', j)
    document.write('step:', j)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('new task----------')
document.write('new task ----')
for (let j = 0; j < 100; j++) {
    if (j % 2 === 0)
        console.log('step:', j)
    document.write('step:', j)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('new task----------')
document.write('new task ----')
for (let j = 0; j < 100; j++) {
    if (j % 2 !== 0)
        console.log('step:', j)
    document.write('step:', j)
}
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {name: 'text1111111', pages: 222, authors: ['vasya', 'anna', 'oleg'], genre: ['horror', 'drama']},
    {name: 'text211', pages: 322, authors: ['anna'], genre: ['horror', 'drama', 'comedia']},
    {name: 'text322', pages: 100, authors: ['vasya', 'oleg'], genre: ['horror']},
    {name: 'text4222222222222', pages: 1000, authors: ['vasya', 'oleg'], genre: ['horror']},
    {name: 'text4', pages: 5000, authors: ['vasya', 'oleg'], genre: ['horror']},
    {name: 'text522', pages: 212, authors: ['vasya', 'anna', 'oleg'], genre: ['horror', 'drama', 'comedia','roman']}
]
// -знайти наібльшу книжку.
console.log('new task-----------')
let maximum = books[0]
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (maximum.pages < book.pages) {
        maximum = book;
    }
}
console.log(maximum)

// - знайти книжку/ки з найбільшою кількістю жанрів
console.log('new task-----------')
let maxgenre = books[0]
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (maxgenre.genre.length < book.genre.length) {
        maxgenre = book;
    }
}
console.log(maxgenre)

// - знайти книжку/ки з найдовшою назвою
console.log('new task-----------')
let longString = books[0];
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (longString.name.length<book.name.length){
        longString=book;
    }
}
    console.log(longString);
// - знайти книжку/ки які писали 2 автори
console.log('new task-----------')
for (let j = 0; j < books.length; j++) {
let twoAuthors = books[j];
    // const book = books[j];
    if (twoAuthors.authors.length === 2){
        console.log(twoAuthors)
    }
}
// - знайти книжку/ки які писав 1 автор
console.log('new task-----------')
for (let j = 0; j < books.length; j++) {
    let twoAuthors = books[j];
    // const book = books[j];
    if (twoAuthors.authors.length === 1){
        console.log(twoAuthors)
    }
}