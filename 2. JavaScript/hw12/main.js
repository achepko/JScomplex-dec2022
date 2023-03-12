// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

let URL = 'http://jsonplaceholder.typicode.com/users';
fetch(URL)
    .then(value => value.json())
    .then(users => console.log(users));
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
fetch(URL)
    .then(value => value.json())
    .then(users => {
        for (let i = 0; i < users.length; i++) {
            let div = document.createElement('div');
            div.classList.add('post-item');
            let a = document.createElement('a');
            a.innerHTML = `${users[i].id}  -  ${users[i].name}`;
            a.href = 'user-details.html?id=' + JSON.stringify(users[i].id);
            a.setAttribute('target','_blank');
            div.appendChild(a);
            document.body.appendChild(div)
        }
    })
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

