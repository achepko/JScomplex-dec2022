// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let divE = document.createElement('div');
divE.innerText = 'HELLO OKTEN OKTEN OKTEN OKTEN OKTEN OKTEN ';
divE.classList.add('wrap', 'collapse', 'alpha', 'beta');
document.body.append(divE);
let divECopy = divE.cloneNode(true);
document.body.append(divECopy);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let arr = ['Main', 'Products', 'About us', 'Contacts'];
let ulLi = document.createElement('ul');
ulLi.classList.add('first');
document.body.append(ulLi);
for (let i = 0; i < arr.length; i++) {
    let liElement = document.createElement('li');
    liElement.innerText = arr[i];
    ulLi.append(liElement);
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    let divElement = document.createElement('div');

    let title = document.createElement('h2');
    title.innerText = ` ${course.title}  ----- ${course.monthDuration} month`;

    divElement.appendChild(title);
    document.body.appendChild(divElement);
}
// =========================
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray2) {
    let divElement = document.createElement('div');
    divElement.classList.add('item')

    let title = document.createElement('h1');
    title.classList.add('heading')
    title.innerText = course.title;


    let month = document.createElement('p');
    month.classList.add('description')
    month.innerText = course.monthDuration;

    divElement.append(title, month);
    document.body.appendChild(divElement);
}
// ==========================

// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];


for (const simpson of simpsons) {
    let divSimpsons = document.createElement('div');
    divSimpsons.classList.add('member');

    let h1Simpsons = document.createElement('h1');
    h1Simpsons.innerText = `${simpson.name} ${simpson.surname} -- ${simpson.age} y.o.`;

    let divPhoto = document.createElement('img');
    divPhoto.src = simpson.photo;

    let pSimpsons = document.createElement('p');
    pSimpsons.innerText = `${simpson.info}`

    divSimpsons.append(h1Simpsons, divPhoto, pSimpsons);

    document.body.append(divSimpsons);

}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

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

let divMain = document.createElement('div');
divMain.classList.add('main');
for (const item of coursesArray) {

    let divItem = document.createElement('div');
    let title = document.createElement('h1');
    let duration1 = document.createElement('h2');
    let duration2 = document.createElement('h2');
    let modules = document.createElement('ul');

    divItem.classList.add('item');
    title.classList.add('title');
    duration1.classList.add('duration1');
    duration2.classList.add('duration2')

    title.innerText = item.title;
    duration1.innerText = `${item.monthDuration} month`;
    duration2.innerText = `${item.hourDuration} hours`

    modules.classList.add('modules');
    for (const itemElement of item.modules) {
        let htmlliElement = document.createElement('li');
        modules.appendChild(htmlliElement)
        htmlliElement.innerText = itemElement;
    }

    divItem.append(title, duration1, duration2, modules);
    divMain.appendChild(divItem);
    document.body.appendChild(divMain);
}

// ------------------
//
//     - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let h3Text = document.createElement('h3');
let buttonText = document.createElement('button');
h3Text.innerText = 'OKTEN SCHOOL';
h3Text.id = 'text';
buttonText.innerText = "DELETE TEXT"
document.body.append(h3Text, buttonText)

buttonText.onclick = () => {
    h3Text.style.display = 'none';
}
// buttonText.setAttribute('onclick', `(document.getElementById('text').style.display='none')`)
// buttonText.addEventListener('click',() =>{h3Text.remove()});

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let h3Input = document.createElement('h3');
let htmlInput = document.createElement(`input`);
let htmlButton = document.createElement('button');
document.body.append(h3Input, htmlInput, htmlButton);

h3Input.innerText = 'OKTEN SCHOOL new';
htmlButton.innerText = '18 Y.O.????';
htmlInput.setAttribute('type', 'number');

htmlButton.onclick = () => {
    if (htmlInput.value < 18) {
         alert('GO AWAY');
    } else {
        alert('WELCOME')
    }
}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання);

let h1New = document.createElement('h1');
h1New.innerText = 'LAST HARDEST TASK'

let formNew = document.createElement('form');
let inputNew = document.createElement('input');
let input1New = document.createElement('input');
let input2New = document.createElement('input');
let input3New = document.createElement('input');

inputNew.setAttribute('type','number')
input1New.setAttribute('type','number')
input2New.setAttribute('type','text')
input3New.setAttribute('type','button')
inputNew.setAttribute('placeholder','set quantity of rows')
input1New.setAttribute('placeholder','set quantity of cells')
input2New.setAttribute('placeholder','set content of cell ')
input3New.setAttribute('value','CLICK ME!')

formNew.append(inputNew,input1New,input2New,input3New);
document.body.append(h1New,formNew)

input3New.onclick = () => {
    let h2Res = document.createElement('h2');
    h2Res.innerText = 'RESULT'
    document.body.append(h2Res);
    let table = document.createElement('table');
    document.body.appendChild(table)
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.append(thead,tbody);
    let tr1 = document.createElement('tr');
    thead.appendChild(tr1);
    let tr2 = document.createElement('tr');
    tbody.appendChild(tr2);
    let th = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    tr1.append(th,th2,th3);
    th.innerHTML = 'ROWS'
    th2.innerHTML = 'CELLS'
    th3.innerHTML = 'CONTENT'
    let td = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    tr2.append(td,td2,td3);
    td.innerHTML = inputNew.value;
    td2.innerHTML = input1New.value;
    td3.innerHTML = input2New.value;
}