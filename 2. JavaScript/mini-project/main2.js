let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv')
        showUserInfo(user);

        function showUserInfo(object) {
            for (const objectParam in object) {
                let userParam = document.createElement('div');
                userParam.classList.add('userParam')
                let userInfo = document.querySelector('.userInfo');
                userInfo.appendChild(userParam);
                if (typeof object[objectParam] !== 'object') {
                    userParam.innerHTML = `${objectParam}: ${object[objectParam]}`;
                } else {
                    userParam.innerHTML = `${objectParam}:`;
                    let ul = document.createElement('ul');
                    for (const subParam in object[objectParam]) {
                        if (typeof object[objectParam][subParam] !== 'object') {
                            let li = document.createElement('li');
                            li.id = 'id';
                            userParam.appendChild(ul);
                            ul.appendChild(li);
                            li.innerHTML = `${subParam}: ${object[objectParam][subParam]}`;
                        } else {
                            let li = document.getElementById('id');
                            li.innerHTML = `${subParam}:`;
                            let ul2 = document.createElement('ul');
                            for (const subSubParam in object[objectParam][subParam]) {
                                if (typeof subSubParam !== 'object') {
                                    let li2 = document.createElement('li');
                                    ul2.appendChild(li2);
                                    li.appendChild(ul2);
                                    li2.innerHTML = `${subSubParam}: ${object[objectParam][subParam][subSubParam]}`;

                                }
                            }
                        }
                    }
                }
            }
        }
    });


let buttonShowPosts = document.createElement('button');
buttonShowPosts.innerHTML = 'SHOW/HIDE ALL POSTS'
let userPosts = document.querySelector('.userPosts');
userPosts.appendChild(buttonShowPosts);

    fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json())
        .then(posts => {
                let postsTitles = document.createElement('div');
            for (let i = 0; i < posts.length; i++) {
                let postTitle = document.createElement('div');
                postTitle.classList.add('postTitle')
                postsTitles.classList.add('postsTitles')
                postTitle.innerHTML = `${posts[i].title}`;

                postsTitles.appendChild(postTitle);
                userPosts.appendChild(postsTitles);

                let a = document.createElement('a');
                let buttonPostDetails = document.createElement('button');
                buttonPostDetails.innerHTML = 'READ MORE'
                a.appendChild(buttonPostDetails);
                postsTitles.appendChild(a);
                a.href = 'post-details.html?id=' + id + '&post#' + JSON.stringify(posts[i].id)
            }
        })

buttonShowPosts.addEventListener('click', function (e) {
    let postsTitles = document.querySelector('.postsTitles');
    console.log(postsTitles)
                postsTitles.classList.toggle('open');})

let aHome = document.createElement('a');
let buttonHome = document.createElement('button');
buttonHome.classList.add('buttonHome');
aHome.appendChild(buttonHome);
document.body.appendChild(aHome);
buttonHome.innerHTML = 'HOME PAGE'
buttonHome.addEventListener('click',function () {
aHome.href = 'index.html'
})




// buttonShowPosts.addEventListener('click', function (e) {
//     fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
//         .then(value => value.json())
//         .then(posts => {
//             let postsTitles = document.createElement('div');
//             for (let i = 0; i < posts.length; i++) {
//                 let postTitle = document.createElement('div');
//                 postTitle.classList.add('postTitle')
//                 postsTitles.classList.add('postsTitles')
//                 postTitle.innerHTML = `${posts[i].title}`;
//
//                 postsTitles.appendChild(postTitle);
//                 userPosts.appendChild(postsTitles);
//
//                 let a = document.createElement('a');
//                 let buttonPostDetails = document.createElement('button');
//                 buttonPostDetails.innerHTML = 'Post Details'
//                 a.appendChild(buttonPostDetails);
//                 postsTitles.appendChild(a);
//                 postsTitles.classList.toggle('open');
//             }
//         })
// })
