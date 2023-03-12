let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => console.log(user));

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(user => {
        let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv')
        showUserInfo(user);

        function showUserInfo(object) {
            for (const objectParam in object) {
                if (typeof object[objectParam] !== 'object') {
                    let userParam = document.createElement('div');
                    userParam.innerHTML = `${objectParam}: ${object[objectParam]}`;
                    userDiv.appendChild(userParam);
                    let wrapper = document.querySelector('.userInfo');
                    wrapper.appendChild(userDiv);
                } else
                    showUserInfo(object[objectParam])
            }
        }
    });

let buttonShowPosts = document.createElement('button');
buttonShowPosts.innerHTML = 'Post of current user'
let userPosts = document.querySelector('.userPosts');
userPosts.appendChild(buttonShowPosts);

buttonShowPosts.addEventListener('click', function (e) {
    fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json())
        .then(posts => {
            for (let i = 0; i < posts.length; i++) {
                let postsTitles = document.createElement('div');
                let postTitle = document.createElement('div');
                postTitle.classList.add('postTitle')
                postsTitles.classList.add('postsTitles')
                postTitle.innerHTML = `${posts[i].title}`;

                postsTitles.appendChild(postTitle);
                userPosts.appendChild(postsTitles);
                
                let a = document.createElement('a');
                let buttonPostDetails = document.createElement('button');
                buttonPostDetails.innerHTML = 'Post Details'
                a.appendChild(buttonPostDetails);
                postsTitles.appendChild(a);
            }
        })
})
