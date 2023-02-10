// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [1, 2, 'three', null, 5, undefined, '7', 8, 9, true, false]
console.log(array[0])
console.log(array[1])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])
console.log(array[10])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'It',
    pageCount: 1138,
    genre: 'horror'
};
console.log(book1);
let book2 = {
    title: 'The Green Mile',
    pageCount: 496,
    genre: 'fantasy drama'
};
console.log(book2);
let book3 = {
    title: 'The Shining',
    pageCount: 447,
    genre: 'horror'
};
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title: 'It',
    pageCount: 1138,
    genre: 'horror',
    authors: [
        {name:'Stephen King',
            age:75},
        {name:'Vasya',
            age:25}
    ]
};
console.log(book11);
let book22 = {
    title: 'The Green Mile',
    pageCount: 496,
    genre: 'fantasy drama',
    authors: [
        {name:'Stephen King',
            age:75},
        {name:'Vasya',
            age:25}
    ]
};
console.log(book22);
let book33 = {
    title: 'The Shining',
    pageCount: 447,
    genre: 'horror',
    authors: [
        {name:'Stephen King',
            age:75},
        {name:'Vasya',
            age:25}
    ]
};
console.log(book33);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
     {name:'anton',username:'user1',password:'1111'},
     {name:'petya',username:'user2',password:'2222'},
     {name:'anna',username:'user3',password:'3333'},
     {name:'katya',username:'user4',password:'4444'},
     {name:'sasha',username:'user5',password:'5555'},
     {name:'lena',username:'user6',password:'6666'},
     {name:'ilya',username:'user7',password:'7777'},
     {name:'artem',username:'user8',password:'8888'},
     {name:'artur',username:'user9',password:'9999'},
     {name:'oleg',username:'user10',password:'1010'},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

let x1 = 0;
if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

let x2 = -3;
if (x !== 0){
    console.log('Вірно')
}else{
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 30;
if (time <= 15){
    console.log('Перша четверть години')
}else if (time > 15 && time <= 30){
    console.log('Друга четверть години')
}else if (time > 30 && time <= 45){
    console.log('Третя четверть години')
}else if (time > 45 && time <= 59){
    console.log('Третя четверть години')
}else{
    console.log('???')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 20;
if (day < 10){
    console.log('1 decade')
}else if(day > 10 && day <= 20){
    console.log('2 decade')
}else if(day >20 && day <= 30){
    console.log('3 decade')
}else{
    console.log('???')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let daily = prompt('Введіть порядковий номер дня тижня');
switch (daily){
    case '1': console.log('Monday');
        break;
    case '2': console.log('Tuesday');
        break;
    case '3': console.log('Wednesday');
        break;
    case '4': console.log('Thursday');
        break;
    case '5': console.log('Friday');
        break;
    case '6': console.log('Saturday');
        break;
    case '7': console.log('Sunday');
    break;
    default: console.log('Please enter number of the day')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('Enter number 1');
let num2 = +prompt('Enter number 2');
if (num1 > num2){
    console.log(num1);
}else if (num2 > num1){
    console.log(num2);
}else if (num1 === num2){
    console.log('Були введені рівні числа');
}else{
    console.log('Були введені невірні дані');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let xxx = prompt('enter something')
// if (xxx === 'false' || xxx === '0' || xxx === '' || xxx === `` || xxx === "" || xxx === 'null' || xxx === 'undefined' || xxx === 'NaN'){
//     console.log('xxx=default');
// }else {
//     console.log(xxx)
// }

let test = 0;
let red = test || 'default';
console.log(red)

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
} else {
    console.log('???')
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
} else {
    console.log('???')
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
} else {
    console.log('???')
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
} else {
    console.log('???')
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
} else {
    console.log('???')
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
} else {
    console.log('???')
}