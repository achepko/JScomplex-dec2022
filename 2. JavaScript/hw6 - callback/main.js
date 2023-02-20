// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1 = 'hello world'
let s2 = 'lorem ipsum'
let s3 = 'javascript is cool'
console.log(s1.length);
console.log(s2.length);
console.log(s3.length);
['hello world', 'lorem ipsum', 'javascript is cool'].forEach((item) => console.log(item.length));
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let s1Upper = s1.toUpperCase();
let s2Upper = s2.toUpperCase();
let s3Upper = s3.toUpperCase();
console.log(s1Upper);
console.log(s2Upper);
console.log(s3Upper);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(s1Upper.toLowerCase());
console.log(s2Upper.toLowerCase());
console.log(s3Upper.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let clearString = str
    .replaceAll(' ', '')
    .replaceAll('ys', 'y s')
console.log(clearString)

console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
let stringToarray = (str) => {
    return str.split(' ')
}
console.log(stringToarray(str2));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let massive = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mapMas = massive.map(value => {
    return value + ''
});
console.log(mapMas);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// V1

// let nums1 = [11, 21, 3];
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     }
//     if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr
// }
// console.log(sortNums(nums1, 'ascending'));
// console.log(sortNums(nums1, 'descending'));

let nums = [11, 21, 3];
const sortNums = (arr, order) => {
  switch (order) {
    case 'ascending':
      return arr.sort((a, b) => a > b);
    case 'descending':
      return arr.sort((a, b) => a < b);
  }
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort((a, b) => {
//     if (a.monthDuration > b.monthDuration) {return -1};
//     if (a.monthDuration < b.monthDuration) {return 1};
//     if (a.monthDuration === b.monthDuration) {return 0};
// }));
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filterArr);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// let arrId = coursesAndDurationArray.map((value, index) => {
//     return {id: index + 1, title: value.title, monthDuration: value.monthDuration};
// })
// console.log(arrId);
console.log(coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value}}));
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deckOfCard = [
    {value: '6', suit: 'Heart', color: 'red'},
    {value: '6', suit: 'Spade', color: 'black'},
    {value: '6', suit: 'Club', color: 'black'},
    {value: '6', suit: 'Diamond', color: 'red'},
    {value: '7', suit: 'Heart', color: 'red'},
    {value: '7', suit: 'Spade', color: 'black'},
    {value: '7', suit: 'Club', color: 'black'},
    {value: '7', suit: 'Diamond', color: 'red'},
    {value: '8', suit: 'Heart', color: 'red'},
    {value: '8', suit: 'Spade', color: 'black'},
    {value: '8', suit: 'Club', color: 'black'},
    {value: '8', suit: 'Diamond', color: 'red'},
    {value: '9', suit: 'Heart', color: 'red'},
    {value: '9', suit: 'Spade', color: 'black'},
    {value: '9', suit: 'Club', color: 'black'},
    {value: '9', suit: 'Diamond', color: 'red'},
    {value: '10', suit: 'Heart', color: 'red'},
    {value: '10', suit: 'Spade', color: 'black'},
    {value: '10', suit: 'Club', color: 'black'},
    {value: '10', suit: 'Diamond', color: 'red'},
    {value: 'Jack', suit: 'Heart', color: 'red'},
    {value: 'Jack', suit: 'Spade', color: 'black'},
    {value: 'Jack', suit: 'Club', color: 'black'},
    {value: 'Jack', suit: 'Diamond', color: 'red'},
    {value: 'Queen', suit: 'Heart', color: 'red'},
    {value: 'Queen', suit: 'Spade', color: 'black'},
    {value: 'Queen', suit: 'Club', color: 'black'},
    {value: 'Queen', suit: 'Diamond', color: 'red'},
    {value: 'King', suit: 'Heart', color: 'red'},
    {value: 'King', suit: 'Spade', color: 'black'},
    {value: 'King', suit: 'Club', color: 'black'},
    {value: 'King', suit: 'Diamond', color: 'red'},
    {value: 'Ace', suit: 'Heart', color: 'red'},
    {value: 'Ace', suit: 'Spade', color: 'black'},
    {value: 'Ace', suit: 'Club', color: 'black'},
    {value: 'Ace', suit: 'Diamond', color: 'red'}
]
// - знайти піковий туз
let find = deckOfCard.find(value => value.value === 'Ace' && value.suit === 'Spade');
console.log(find);
// - всі шістки
let filterAll6 = deckOfCard.filter(value => value.value === '6');
console.log(filterAll6);
// - всі червоні карти
let filterRedCard = deckOfCard.filter(value => value.color === 'red');
console.log(filterRedCard);
// - всі буби
let filterAllDiamond = deckOfCard.filter(value => value.suit === 'Diamond');
console.log(filterAllDiamond);
// - всі трефи від 9 та більше
let filter9 = deckOfCard.filter(value => value.suit === 'Club');
let filter99 = filter9.filter(value => value.value !== '6' && value.value !== '7' && value.value !== '8');
console.log(filter99);

// const filterClubs = cards.filter(card => (card.value > +'8' || card.value > '8') && card.cardSuit === 'clubs');

// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// V1

// let reduce = deckOfCard.reduce((accumulator, value) => {
//     if (value.suit === 'Spade') {
//         accumulator.spades.push(value)
//     }
//     if (value.suit === 'Diamond') {
//         accumulator.diamonds.push(value)
//     }
//     if (value.suit === 'Heart') {
//         accumulator.hearts.push(value)
//     }
//     if (value.suit === 'Club') {
//         accumulator.clubs.push(value)
//     }
//     return accumulator;
// }, {spades: [], diamonds: [], hearts: [], clubs: []});
// console.log(reduce);

let reduce2 = deckOfCard.reduce((acc, value) => {
    acc[value.suit].push(value);
    return acc;
},{Spade: [], Diamond: [], Heart: [], Club: []});
console.log(reduce2);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

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

// v1

// let filterSass = (arr) => {
//     let item = [];
//     arr.forEach(value => {
//         if (value.modules.includes('sass')) {
//             item.push(value);
//         }
//     })
//     return item;
// }
// console.log(filterSass(coursesArray));

let filterSass2 = coursesArray.filter(value => value.modules.includes('sass'));
console.log(filterSass2);

// v1

// let filterDocker = (arr) => {
//     let item = [];
//     arr.forEach(value => {
//         if (value.modules.includes('docker')) {
//             item.push(value);
//         }
//     })
//     return item;
// }
// console.log(filterDocker(coursesArray));

let filterDocker2 = coursesArray.filter(value => value.modules.includes('docker'));
console.log(filterDocker2);
