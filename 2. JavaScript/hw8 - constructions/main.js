// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'anton', 'text1', 'text1.@gmail.com', '+380631111111');
let user2 = new User(22, 'oleg', 'text2', 'text2.@gmail.com', '+380631111112');
let user3 = new User(11, 'anna', 'text3', 'text3.@gmail.com', '+380631111113');
let user4 = new User(2, 'sasha', 'text4', 'text4.@gmail.com', '+380631111114');
let user5 = new User(4, 'cenya', 'text5', 'text5.@gmail.com', '+380631111115');
let user6 = new User(6, 'lena', 'text6', 'text6.@gmail.com', '+380631111116');
let user7 = new User(55, 'sabina', 'text7', 'text7.@gmail.com', '+380631111117');
let user8 = new User(10, 'oleg2', 'text8', 'text8.@gmail.com', '+380631111118');
let user9 = new User(95, 'anton2', 'text9', 'text9.@gmail.com', '+380631111119');
let user10 = new User(112, 'sergiy', 'text10', 'text10.@gmail.com', '+380631111110');

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterId = users.filter(value => value.id % 2 === 0);
console.log(filterId);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortId = users.sort((a, b) => a.id - b.id);
console.log(sortId);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let client1 = new Client(1, 'anton', 'text1', 'text1.@gmail.com', '+380631111111', ['laptop', 'iphone']);
let client2 = new Client(11, 'oleg', 'text2', 'text21.@gmail.com', '+380631111112', ['laptop2']);
let client3 = new Client(122, 'anna', 'text3', 'text231.@gmail.com', '+380631111411', ['laptop', 'iphone', 'notebook']);
let client4 = new Client(2, 'sveta', 'text44', 'text54351.@gmail.com', '+380631161111', ['laptop', 'iphone', 'book', 'pensil']);
let client5 = new Client(3, 'anton2', 'text112', 'text1456.@gmail.com', '+380631911111', ['book']);
let client6 = new Client(44, 'sergiy', 'text121', 'text16546.@gmail.com', '+380631911111', ['laptop', 'book']);
let client7 = new Client(6, 'anna', 'text5451', 'text6541.@gmail.com', '+380631111811', ['book', 'iphone']);
let client8 = new Client(12, 'lena', 'text541', 'text167.@gmail.com', '+3806311111421', ['laptop']);
let client9 = new Client(9, 'anton2', 'text17', 'text176.@gmail.com', '+380631111161', ['laptop', 'iphone2']);
let client10 = new Client(71, 'anton3', 'text18', 'text761.@gmail.com', '+380631115111', ['laptop', 'pensil']);
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10)
console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clinetsSorted = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clinetsSorted);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manuf, year, maxSpeed, engCapicity) {
    this.model = model;
    this.manuf = manuf;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engCapicity = engCapicity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed}km на годину`)
    };
    this.info = function () {
        console.log(`
            model: ${model}
            manuf: ${manuf}
            year: ${year}
            maxSpeed: ${maxSpeed}
            engCapacity: ${engCapicity}
        `)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(+maxSpeed + (+newSpeed))
    };
    this.changeYear = function (newValue) {
        console.log(year = newValue)
    };
    this.addDriver = function (driver, ...rest) {
        this['Drivers'] = [];
        this['Drivers'].push(driver, ...rest);
        return this
    }
}

let car1 = new Car('Sportage', 'Kia', '2020', '186', '1999');
car1.drive();
car1.info();
car1.increaseMaxSpeed('30')
car1.changeYear('2023')
console.log(car1.addDriver({name: 'anton', age: 26}, {name: 'oleg', age: 21}, {name: 'anton', age: 26}, {
    name: 'oleg',
    age: 21
}));
// console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let nCar = class {
    constructor(model, manuf, year, maxSpeed, engCapicity) {
        this.model = model;
        this.manuf = manuf;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engCapicity = engCapicity;
        this.drive = function () {
            console.log(`їдемо зі швидкістю ${maxSpeed}km на годину`)
        };
    }
    info() {
        console.log(`
            model: ${this.model}
            manuf: ${this.manuf}
            year: ${this.year}
            maxSpeed: ${this.maxSpeed}
            engCapacity: ${this.engCapicity}
        `)
    }
    increaseMaxSpeed(newSpeed) {
        console.log(+this.maxSpeed + (+newSpeed))
    };
    changeYear(newValue) {
        console.log(this.year = newValue)
    };
    addDriver(driver, ...rest) {
        this['Drivers'] = [];
        this['Drivers'].push(driver, ...rest);
        return this
    }
}
let car2 = new nCar('Sportage2', 'Kia2', '2023', '286', '2100');
car2.drive();
car2.info();
car2.increaseMaxSpeed('30');
car2.changeYear('2021');
console.log(car2.addDriver({name: 'anton', age: 26}, {name: 'oleg', age: 21}));

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
let cinderellas = [];
let Cinderella = class {
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cind1 = new Cinderella ('lena',21,35);
let cind2 = new Cinderella ('anna',22,31);
let cind3 = new Cinderella ('olya',20,32);
let cind4 = new Cinderella ('sabina',42,31);
let cind5 = new Cinderella ('lena2',52,32);
let cind6 = new Cinderella ('anna2',12,38);
let cind7 = new Cinderella ('olya2',32,41);
let cind8 = new Cinderella ('marina',21,39);
let cind9 = new Cinderella ('sveta',19,40);
let cind10 = new Cinderella ('lena3',18,42);
cinderellas.push(cind1,cind2,cind3,cind4,cind5,cind6,cind7,cind8,cind9,cind10);
console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince extends Cinderella{
    constructor(name,age,footSize) {
        super(name,age,footSize);
    }
}
let princeFounder = new Prince(undefined,undefined ,35);
console.log(princeFounder);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize === 35){
        console.log(cinderella)
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(cinderellas.find(value => value.footSize === 35));