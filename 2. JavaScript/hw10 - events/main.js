// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let submit = document.querySelector('#form');
submit.button.innerText = 'submit info'
submit.addEventListener('submit', function (e) {
    e.preventDefault();
    let div1 = document.createElement('div');
    div1.classList.add('f1')
    div1.innerText = `${this.name.value} ${this.surname.value} ${this.age.value}`
    submit.append(div1);
    submit.name.value = '';
    submit.surname.value = '';
    submit.age.value = '';

});
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// option 1
let numberBox = document.querySelector('.numer-box');
let number = localStorage.getItem('h1') || 0;
let numberHTML = document.createElement('h1');
numberHTML.innerText = `${+(JSON.parse(number)) + 1}`
localStorage.setItem('h1', JSON.stringify(numberHTML.innerText))
numberBox.appendChild(numberHTML);

// option 2
// let numberBox = document.querySelector('.numer-box');
// if ( localStorage.getItem('h3')){
//     let numberHTML = document.createElement('h3');
//     numberHTML.innerText = `${+(JSON.parse(localStorage.getItem('h3')))+1}`
//     numberBox.appendChild(numberHTML);
//     localStorage.setItem('h3',JSON.stringify(numberHTML.innerText))
// }else if (!localStorage.getItem('h3')){
// let numberBox = document.querySelector('.numer-box');
//     localStorage.setItem('h3','0')
//     localStorage.getItem('h3')
//     let numberHTML = document.createElement('h3');
//     numberHTML.innerText = `${+(JSON.parse(localStorage.getItem('h3')))+1}`
//     numberBox.appendChild(numberHTML);
//     localStorage.setItem('h3',JSON.stringify(numberHTML.innerText))
// }

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let sessionsDate = JSON.parse(localStorage.getItem('sessions')) || [];
let date = new Date();
sessionsDate.push(date);
localStorage.setItem('sessions', JSON.stringify(sessionsDate));

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.s
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// for (let i = 0; i < locations.length; i++) {
//     const location = locations[i];
//     location['index'] = i;
// }
// document.body.append(JSON.stringify(locations));

let locations = [{"title": "м. Київ", "type": "city", "index": 0},
    {"title": "Житомирська область", "type": "oblast", "index": 1},
    {"title": "Харківська область", "type": "oblast", "index": 2},
    {"title": "Вінницька область", "type": "oblast", "index": 3},
    {"title": "Чернігівська область", "type": "oblast", "index": 4},
    {"title": "Дніпропетровська область", "type": "oblast", "index": 5},
    {"title": "Черкаська область", "type": "oblast", "index": 6},
    {"title": "Волинська область", "type": "oblast", "index": 7},
    {"title": "Київська область", "type": "oblast", "index": 8},
    {"title": "Миколаївська область", "type": "oblast", "index": 9},
    {"title": "Рівненська область", "type": "oblast", "index": 10},
    {"title": "Сумська область", "type": "oblast", "index": 11},
    {"title": "Тернопільська область", "type": "oblast", "index": 12},
    {"title": "Краматорський район", "type": "raion", "index": 13},
    {"title": "Кіровоградська область", "type": "oblast", "index": 14},
    {"title": "Хмельницька область", "type": "oblast", "index": 15},
    {"title": "Запорізька область", "type": "oblast", "index": 16},
    {"title": "Одеська область", "type": "oblast", "index": 17},
    {"title": "Полтавська область", "type": "oblast", "index": 18},
    {"title": "Львівська область", "type": "oblast", "index": 19},
    {"title": "м. Кривий Ріг", "type": "city", "index": 20},
    {"title": "Криворізька територіальна громада", "type": "hromada", "index": 21},
    {"title": "Івано-Франківська область", "type": "oblast", "index": 22},
    {"title": "Чернівецька область", "type": "oblast", "index": 23},
    {"title": "Ізюмський район", "type": "raion", "index": 24},
    {"title": "Бахмутська територіальна громада", "type": "hromada", "index": 25},
    {"title": "м. Васильків", "type": "city", "index": 26},
    {"title": "Васильківська територіальна громада", "type": "hromada", "index": 27},
    {"title": "Білоцерківська територіальна громада", "type": "hromada", "index": 28},
    {"title": "м. Біла Церква", "type": "city", "index": 29},
    {"title": "Донецька область", "type": "oblast", "index": 30},
    {"title": "Покровський район", "type": "raion", "index": 31},
    {"title": "Уманська територіальна громада", "type": "hromada", "index": 32},
    {"title": "Бахмутський район", "type": "raion", "index": 33},
    {"title": "Закарпатська область", "type": "oblast", "index": 34},
    {"title": "Лубенська територіальна громада", "type": "hromada", "index": 35},
    {"title": "м. Лубни", "type": "city", "index": 36},
    {"title": "Полтавська територіальна громада", "type": "hromada", "index": 37},
    {"title": "м. Полтава", "type": "city", "index": 38},
    {"title": "м. Старокостянтинів", "type": "city", "index": 39},
    {"title": "Старокостянтинівська територіальна громада", "type": "hromada", "index": 40},
    {"title": "м. Миколаїв", "type": "city", "index": 41},
    {"title": "Миколаївська територіальна громада", "type": "hromada", "index": 42},
    {"title": "Торецька територіальна громада", "type": "hromada", "index": 43},
    {"title": "Кропивницький район", "type": "raion", "index": 44},
    {"title": "Першотравенська територіальна громада", "type": "hromada", "index": 45},
    {"title": "Нікопольська територіальна громада", "type": "hromada", "index": 46},
    {"title": "м. Нікополь", "type": "city", "index": 47},
    {"title": "м. Першотравенськ", "type": "city", "index": 48},
    {"title": "Одеський район", "type": "raion", "index": 49},
    {"title": "м. Черкаси", "type": "city", "index": 50},
    {"title": "Черкаська територіальна громада", "type": "hromada", "index": 51},
    {"title": "Добропільська територіальна громада", "type": "hromada", "index": 52},
    {"title": "Херсонська область", "type": "oblast", "index": 53},
    {"title": "Сумська територіальна громада", "type": "hromada", "index": 54},
    {"title": "м. Суми", "type": "city", "index": 55},
    {"title": "Первомайська територіальна громада", "type": "hromada", "index": 56},
    {"title": "Краматорська територіальна громада", "type": "hromada", "index": 57},
    {"title": "Макарівська територіальна громада", "type": "hromada", "index": 58},
    {"title": "м. Краматорськ", "type": "city", "index": 59},
    {"title": "Миргородська територіальна громада", "type": "hromada", "index": 60},
    {"title": "м. Бориспіль", "type": "city", "index": 61},
    {"title": "Броварська територіальна громада", "type": "hromada", "index": 62},
    {"title": "м. Миргород", "type": "city", "index": 63},
    {"title": "Бориспільська територіальна громада", "type": "hromada", "index": 64},
    {"title": "м. Бровари", "type": "city", "index": 65},
    {"title": "м. Вознесенськ", "type": "city", "index": 66},
    {"title": "Коростенський район", "type": "raion", "index": 67},
    {"title": "м. Первомайськ", "type": "city", "index": 68},
    {"title": "Миронівська територіальна громада", "type": "hromada", "index": 69},
    {"title": "Вознесенський район", "type": "raion", "index": 70},
    {"title": "Синельниківський район", "type": "raion", "index": 71},
    {"title": "Фастівська територіальна громада", "type": "hromada", "index": 72},
    {"title": "Вознесенська територіальна громада", "type": "hromada", "index": 73},
    {"title": "Житомирський район", "type": "raion", "index": 74},
    {"title": "Дружківська територіальна громада", "type": "hromada", "index": 75},
    {"title": "м. Фастів", "type": "city", "index": 76},
    {"title": "Слов'янська територіальна громада", "type": "hromada", "index": 77},
    {"title": "Запорізький район", "type": "raion", "index": 78},
    {"title": "м. Слов'янськ", "type": "city", "index": 79},
    {"title": "м. Кременчук", "type": "city", "index": 80},
    {"title": "Ніжинський район", "type": "raion", "index": 81},
    {"title": "м. Ватутіне", "type": "city", "index": 82},
    {"title": "Ватутінська територіальна громада", "type": "hromada", "index": 83},
    {"title": "Кременчуцька територіальна громада", "type": "hromada", "index": 84},
    {"title": "Пологівський район", "type": "raion", "index": 85},
    {"title": "Дніпровська територіальна громада", "type": "hromada", "index": 86},
    {"title": "м. Дніпро", "type": "city", "index": 87},
    {"title": "Лозівський район", "type": "raion", "index": 88},
    {"title": "Покровська територіальна громада", "type": "hromada", "index": 89},
    {"title": "м. Обухів", "type": "city", "index": 90},
    {"title": "Узинська територіальна громада", "type": "hromada", "index": 91},
    {"title": "Шепетівський район", "type": "raion", "index": 92},
    {"title": "Пирятинська територіальна громада", "type": "hromada", "index": 93},
    {"title": "Сумський район", "type": "raion", "index": 94},
    {"title": "Харківський район", "type": "raion", "index": 95},
    {"title": "Жашківська територіальна громада", "type": "hromada", "index": 96},
    {"title": "м. Пирятин", "type": "city", "index": 97},
    {"title": "Павлоградський район", "type": "raion", "index": 98},
    {"title": "Голованівський район", "type": "raion", "index": 99},
    {"title": "Обухівська територіальна громада", "type": "hromada", "index": 100},
    {"title": "Подільський район", "type": "raion", "index": 101},
    {"title": "м. Охтирка", "type": "city", "index": 102},
    {"title": "Мар'їнська територіальна громада", "type": "hromada", "index": 103},
    {"title": "м. Мелітополь", "type": "city", "index": 104},
    {"title": "Куп’янський район", "type": "raion", "index": 105},
    {"title": "Святогірська територіальна громада", "type": "hromada", "index": 106},
    {"title": "м. Рівне", "type": "city", "index": 107},
    {"title": "Бородянська територіальна громада", "type": "hromada", "index": 108},
    {"title": "Роздільнянський район", "type": "raion", "index": 109},
    {"title": "Запорізька територіальна громада", "type": "hromada", "index": 110},
    {"title": "Шосткинська територіальна громада", "type": "hromada", "index": 111},
    {"title": "Болградський район", "type": "raion", "index": 112},
    {"title": "Прилуцький район", "type": "raion", "index": 113},
    {"title": "Олешківська територіальна громада", "type": "hromada", "index": 114},
    {"title": "Березівський район", "type": "raion", "index": 115},
    {"title": "Очаківська територіальна громада", "type": "hromada", "index": 116},
    {"title": "Смілянська територіальна громада", "type": "hromada", "index": 117},
    {"title": "м. Очаків", "type": "city", "index": 118},
    {"title": "Рівненська територіальна громада", "type": "hromada", "index": 119},
    {"title": "Первомайський район", "type": "raion", "index": 120},
    {"title": "Ізмаїльський район", "type": "raion", "index": 121},
    {"title": "Сквирська територіальна громада", "type": "hromada", "index": 122},
    {"title": "м. Шостка", "type": "city", "index": 123},
    {"title": "Мелітопольська територіальна громада", "type": "hromada", "index": 124},
    {"title": "Маріупольський район", "type": "raion", "index": 125},
    {"title": "Охтирська територіальна громада", "type": "hromada", "index": 126},
    {"title": "Білгород-Дністровський район", "type": "raion", "index": 127},
    {"title": "м. Запоріжжя", "type": "city", "index": 128},
    {"title": "м. Коростень", "type": "city", "index": 129},
    {"title": "Луганська область", "type": "oblast", "index": 130},
    {"title": "м. Житомир", "type": "city", "index": 131},
    {"title": "Курахівська територіальна громада", "type": "hromada", "index": 132},
    {"title": "Черкаський район", "type": "raion", "index": 133},
    {"title": "Новоград-Волинський район", "type": "raion", "index": 134},
    {"title": "Костянтинівська територіальна громада", "type": "hromada", "index": 135},
    {"title": "Переяславська територіальна громада", "type": "hromada", "index": 136},
    {"title": "Новоукраїнський район", "type": "raion", "index": 137},
    {"title": "Уманський район", "type": "raion", "index": 138},
    {"title": "Коростенська територіальна громада", "type": "hromada", "index": 139},
    {"title": "м. Переяслав", "type": "city", "index": 140},
    {"title": "Шосткинський район", "type": "raion", "index": 141},
    {"title": "Великоновосілківська територіальна громада", "type": "hromada", "index": 142},
    {"title": "Чернігівський район", "type": "raion", "index": 143},
    {"title": "Радомишльська територіальна громада", "type": "hromada", "index": 144},
    {"title": "Вугледарська територіальна громада", "type": "hromada", "index": 145},
    {"title": "Звенигородський район", "type": "raion", "index": 146},
    {"title": "м. Конотоп", "type": "city", "index": 147},
    {"title": "Вишгородська територіальна громада", "type": "hromada", "index": 148},
    {"title": "Гребінківська територіальна громада", "type": "hromada", "index": 149},
    {"title": "Сарненський район", "type": "raion", "index": 150},
    {"title": "Бердянський район", "type": "raion", "index": 151},
    {"title": "Миколаївський район", "type": "raion", "index": 152},
    {"title": "Гостомелська територіальна громада", "type": "hromada", "index": 153},
    {"title": "Дубровицька територіальна громада", "type": "hromada", "index": 154},
    {"title": "Українська територіальна громада", "type": "hromada", "index": 155},
    {"title": "Сарненська територіальна громада", "type": "hromada", "index": 156},
    {"title": "Воскресенська територіальна громада", "type": "hromada", "index": 157},
    {"title": "м. Маріуполь", "type": "city", "index": 158},
    {"title": "Чугуївський район", "type": "raion", "index": 159},
    {"title": "Охтирський район", "type": "raion", "index": 160},
    {"title": "Житомирська територіальна громада", "type": "hromada", "index": 161},
    {"title": "м. Сарни", "type": "city", "index": 162},
    {"title": "Широківська територіальна громада", "type": "hromada", "index": 163},
    {"title": "Славутицька територіальна громада", "type": "hromada", "index": 164},
    {"title": "Золотоніський район", "type": "raion", "index": 165},
    {"title": "Конотопська територіальна громада", "type": "hromada", "index": 166},
    {"title": "Волноваський район", "type": "raion", "index": 167},
    {"title": "Донецький район", "type": "raion", "index": 168},
    {"title": "Маріупольська територіальна громада", "type": "hromada", "index": 169},
    {"title": "Вараський район", "type": "raion", "index": 170},
    {"title": "м. Славутич", "type": "city", "index": 171}]

let page = 1;

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
prevBtn.addEventListener('click', () => handler(page -= 1));
nextBtn.addEventListener('click', () => handler(page += 1));

handler(page);

function handler(page, limit = 10) {
    let locationNew = document.getElementById('locationNew');

    const newArr = [];
    const startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    if (startIndex > 0) {
        prevBtn.removeAttribute('disabled')
    } else {
        prevBtn.setAttribute('disabled', 'disabled')
    }
    if (endIndex < locations.length) {
        nextBtn.removeAttribute('disabled')
    } else {
        nextBtn.setAttribute('disabled', 'disabled')
        endIndex = locations.length;
    }

    for (let i = startIndex; i < endIndex; i++) {
        const location = locations[i];
        let item = document.createElement('div');
        let index = document.createElement('div');
        let title = document.createElement('div');
        let type = document.createElement('div');

        item.classList.add('wrapper', 'item');

        index.innerHTML = `Index: ${location.index}`;
        title.innerHTML = `Title: ${location.title}`;
        type.innerHTML = `Type: ${location.type}`;

        item.append(index, title, type);
        newArr.push(item);
        locationNew.appendChild(item);
    }
    locationNew.replaceChildren(...newArr);
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form2 = document.getElementById('form2');
console.log(form2);

form2.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let table = document.createElement('table');
    if (form2.rows.value > 50 || form2.cells.value > 50) {
        alert('TOO BIG TABLE!');
    } else {
        document.body.appendChild(table);
        for (let i = 0; i < form2.rows.value; i++) {
            let tr = document.createElement('tr');
            table.appendChild(tr);
            for (let i = 0; i < form2.cells.value; i++) {
                let td = document.createElement('td');
                td.innerHTML = form2.context.value;
                td.classList.add('td');
                tr.appendChild(td);
            }
        }
    }
    form2.rows.value = '';
    form2.cells.value = '';
    form2.context.value = '';
})
