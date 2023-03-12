// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let url = new URL(location.href);
let id = url.searchParams.get('id');
// let id = JSON.parse(json);

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => console.log(user));

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => {
        userInfo(user)
       function userInfo(target) {
           for (const info in user) {
               let h1 = document.createElement('h1');
               document.body.appendChild(h1);
               if (typeof info === 'object'){
                   userInfo(target);
               } else
               h1.innerHTML = `${info} : ${user[info]}`
           }
       }
console.log(typeof user.company)
    })

