// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let submit = document.querySelector('#form');
submit.button.innerText = 'submit info'
submit.addEventListener('submit',function (e){
    e.preventDefault();
    let div1 = document.createElement('div');
    div1.innerText = `${this.name.value} ${this.surname.value} ${this.age.value}`
    submit.append(div1);
});
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// option 1
let number = localStorage.getItem('h3') || 0;
let numberHTML = document.createElement('h3');
numberHTML.innerText = `${+(JSON.parse(number))+1}`
localStorage.setItem('h3',JSON.stringify(numberHTML.innerText))
document.body.appendChild(numberHTML);

// option 2
// if ( localStorage.getItem('h3')){
//     let numberHTML = document.createElement('h3');
//     numberHTML.innerText = `${+(JSON.parse(localStorage.getItem('h3')))+1}`
//     document.body.appendChild(numberHTML);
//     localStorage.setItem('h3',JSON.stringify(numberHTML.innerText))
// }else if (!localStorage.getItem('h3')){
//     localStorage.setItem('h3','0')
//     localStorage.getItem('h3')
//     let numberHTML = document.createElement('h3');
//     numberHTML.innerText = `${+(JSON.parse(localStorage.getItem('h3')))+1}`
//     document.body.appendChild(numberHTML);
//     localStorage.setItem('h3',JSON.stringify(numberHTML.innerText))
// }

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let sessionsDate = JSON.parse(localStorage.getItem('sessions')) || [];
let date = new Date();
sessionsDate.push(date);
localStorage.setItem('sessions',JSON.stringify(sessionsDate));


// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)sa