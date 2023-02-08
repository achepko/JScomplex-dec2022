// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

 for (let i = 0; i < 10; i++) {
     const user = [i];
     document.write(`<div>${i}</div>`)
 }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<h1><u>new task</u></h1>`)

 let users3 = [
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

 for (let i = 0; i < users3.length-2; i++) {
     const user = users3[i];
    document.write(`<div>${user.id} - ${user.name}</div>`)
 }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<h1><u>new task</u></h1>`)

let j = 0
while (j<20){
     document.write(`<h1>${j}</h1>`)
    j++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let users2 = [
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
    {id: 13, name:'artur', age:23, status: false},
    {id: 14, name:'artur', age:23, status: false},
    {id: 15, name:'artur', age:23, status: false},
    {id: 16, name:'artur', age:23, status: false},
    {id: 17, name:'artur', age:23, status: false},
    {id: 18, name:'artur', age:23, status: false},
    {id: 19, name:'artur', age:23, status: false},
    {id: 20, name:'artur', age:23, status: false},
];
document.write(`<h1><u>new task</u></h1>`)
 let a = 0;
 while (a<20){
     const user2 = users2[a]
     document.write(`<h1>${user2.id} - ${user2.name}</h1>`)
     a++;
 }

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
document.write(`<h1><u>new task</u></h1>`)

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (const item of listOfItems) {
    document.write(`<ul>
                        <li>${item}</li>
                   </ul>`)
}
// -----------------------------------------------

//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// 1ий спосіб
// for (const product of products) {
//     document.write(`<div class="product-card">
//               <h3>${product.title} - ${product.price} UAH</h3>
//               <img src="${product.image}" alt="">
//     </div>`);
// }

// 2ий спосіб
for (const product of products) {
    document.write(`<div>`);
             document.write(`<h3>${product.title}</h3>`);
             document.write(`<img src="${product.image}" alt="">`)
    document.write(`</div>`);
}

// -------------------

//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// за допомоги циклу вивести:
// - користувачів зі статусом true
console.log('new task');
for (const user of users) {
    if (user.status === true){
        console.log(user)
    }
}
// - користувачів зі статусом false
console.log('new task')
for (const user of users) {
    if (user.status === false){
        console.log(user)
    }
}
// - користувачів які старші за 30 років
console.log('new task')

for (const user of users) {
    if (user.age > 30){
        console.log(user)
    }
}