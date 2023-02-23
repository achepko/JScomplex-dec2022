// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let str1 = 'наслаждение';
let cutString = (str, n) => {
    const res = [];
    for (let i = 0; i < str.length; i += n) {
        res.push(str.substring(i, i + n));
    }
    return res
}
console.log(cutString(str1, 3));
document.writeln(cutString('наслаждение', 3))
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let str2 = 'Каждый охотник желает знать';
let delete_characters = (str, length) => {
    return str.slice(0, length);
}
console.log(delete_characters(str2, 7));
document.writeln(delete_characters(str2, 7))
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let str3 = "HTML JavaScript PHP";
let insert_dash = (str) => {
    let res =
        str.toUpperCase()
            .replaceAll(' ', '-')
    return res
}
console.log(insert_dash(str3));
document.writeln(insert_dash(str3));
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let str4 = 'каждый охотник желает знать';
let strFirstToUpperCase = (i) => (i[0].toUpperCase() + i.substring(1));
console.log(str4);
console.log(strFirstToUpperCase(str4));
// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
let toNormal = (str) => (str.replaceAll(/[..,---,__]/g, ' '));
console.log(toNormal(n1));
console.log(toNormal(n2));
console.log(toNormal(n3));
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let res = [];
let random100 = (arr) => {
    for (let i = 0; i < 100; i++) {
        let numbers = Math.round(Math.random() * 100);
        arr.push(numbers);
    }
    return arr;
}
console.log(random100(res));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(res.sort((a, b) => a - b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
console.log(res.filter(value => value % 2 === 0 && value !== 0));
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// v1
// let capitalize = (str) => {
//     return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
// }
// console.log(capitalize(str4));
let capitalize = (str) => {
    let arr = str.split(' ');
    let res = arr.map(value => value[0].toUpperCase() + value.substring(1))
        .join(' ')
    return res;
}
console.log(str4);
console.log(capitalize(str4));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
let emailValidator = (email) => {
    let lower = email.toLowerCase()
    if (email.indexOf('@') === 0) {
        console.log('ERROR Please check text before "@"')
    } else if (!email.includes('@')) {
        console.log('ERROR Please add "@"')
    } else if (email.indexOf('.') <= email.indexOf('@') + 3) {
        console.log('ERROR Please check dot')
    } else {
        console.log(`***Your email - ${email} - is ok***`)
    }
}
let email1 = 'someemail@gmail.com';
let email2 = 'someeMAIL@gmail.com';
let email3 = 'someeMAIL@i.ua';
let email4 = 'some.email@gmail.com';
emailValidator(email1)
emailValidator(email2)
emailValidator(email3)
emailValidator(email4)

// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
let count = (str, stringsearch) => {
    let split = str.split('');
    let quantityStr = split.filter(value => value === stringsearch)
    return quantityStr.length
}
let str = "Астрономия это наука о небесных объектах";
console.log(count(str, 'о'));
document.writeln(count(str, 'о'))
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let str10 = "Сила тяжести приложена к центру масс тела";
let cutStrings = (str, n) => {
    let arr = str.split(' ');
    let res = arr.splice(0, n)
        .join(' ');
    return res
}
console.log(cutStrings(str10, 5));
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {name: 'text1111111', pages: 222, authors: ['vasya', 'anna', 'oleg'], genre: ['horror', 'drama']},
    {name: 'text211', pages: 322, authors: ['anna'], genre: ['horror', 'drama', 'comedia']},
    {name: 'text322', pages: 100, authors: ['vasya', 'oleg'], genre: ['horror']},
    {name: 'text4222222222222', pages: 1000, authors: ['vasya', 'oleg'], genre: ['horror']},
    {name: 'text4', pages: 5000, authors: ['vasya', 'oleg'], genre: ['horror']},
    {name: 'text522', pages: 212, authors: ['vasya', 'anna', 'oleg'], genre: ['horror', 'drama', 'comedia', 'roman']}
];
// -знайти наібльшу книжку.
let sortBiggest = (arr) => {
    let res = arr.sort((a, b) => b.pages - a.pages);
    return res[0]
}
console.log(sortBiggest(books));
// - знайти книжку/ки з найбільшою кількістю жанрів
let sortGenre = (arr) => {
    let res = arr.sort((a, b) => b.genre.length - a.genre.length);
    return res[0];
}
console.log(sortGenre(books));
// - знайти книжку/ки з найдовшою назвою
let sortLongestName = (arr) => {
    let res = arr.sort((a, b) => b.name.length - a.name.length);
    return res[0];
}
console.log(sortLongestName(books));
// - знайти книжку/ки які писали 2 автори
let filterTwoAuthors = (arr) =>{
    let res = arr.filter(value => value.authors.length === 2)
    return res
}
console.log(filterTwoAuthors(books));
// - знайти книжку/ки які писав 1 автор
let filterOneAuthors = (arr) =>{
    let res = arr.filter(value => value.authors.length === 1)
    return res
}
console.log(filterOneAuthors(books));
// - вісортувати книжки по кількості сторінок по зростанню
let sortAll = (arr) => {
    let res = arr.sort((a, b) => a.pages - b.pages);
    return res
}
console.log(sortAll(books));