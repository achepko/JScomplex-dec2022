// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let url = new URL(location.href);
let id = url.searchParams.get('id');
// let id = JSON.parse(json);

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => console.log(user));

// fetch('https://jsonplaceholder.typicode.com/users/' + id)
//     .then(value => value.json())
//     .then(user => {
//         userInfo(user)
//         function userInfo(object) {
//             for (const info in object) {
//                 if (typeof object[info] === 'object') {
//                     userInfo(object[info]);
//                 }
//                 let h1 = document.createElement('h1');
//                 document.body.appendChild(h1);
//                 h1.innerHTML = `${info} : ${object[info]}`
//             }
//         }
//     });
fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => {
        userInfo(user)
        function userInfo(object) {
            for (const info in object) {
                if (typeof object[info] !== 'object') {
                let h1 = document.createElement('h1');
                document.body.appendChild(h1);
                h1.innerHTML = `${info} : ${object[info]}`
                }else
                    userInfo(object[info]);
            }
        }
    });
