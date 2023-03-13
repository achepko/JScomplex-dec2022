let url = new URL(location.href);
let id = url.searchParams.get('id');
console.log(id);
fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    .then(value => value.json())
    .then(postsAll => console.log(postsAll))

fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
    .then(value => value.json())
    .then(postsAll =>{
        let posts = document.createElement('div');
        for (let i = 0; i < postsAll.length; i++) {
            let post = document.createElement('div');
            post.classList.add('post')
            posts.classList.add('posts')
            post.innerHTML = `${postsAll[i].title}`;

            posts.appendChild(post);
            let postInfo = document.querySelector('.postInfo');
            postInfo.appendChild(posts);

        }

})