let allWrap2 = document.createElement('div');
allWrap2.classList.add('allW2');
let locStr = localStorage.getItem('userId');
fetch(`https://jsonplaceholder.typicode.com/posts/${locStr}`)
    .then(value => value.json())
    .then(value => {
        let userComment = document.createElement('div');
        userComment.classList.add('comment2');
        userComment.innerHTML = `<h4>UserID: ${value.userId}</h4> <h4>ID: ${value.id}</h4> <h4>Title: ${value.title}</h4> <h4>Body: ${value.body}</h4>`

        document.body.appendChild(allWrap2);
        allWrap2.appendChild(userComment);

        fetch(`https://jsonplaceholder.typicode.com/posts/${locStr}/comments`)
            .then(value1 => value1.json())
            .then(value1 => {
                let posts = document.createElement('div');
                posts.classList.add('posts');
                for (const post of value1) {
                    let postCom = document.createElement('div');
                    postCom.classList.add('postcom');
                    postCom.innerHTML = `<h5>Name: ${post.name}</h5> <h5>Email: ${post.email}</h5> <h5>Body: ${post.body}</h5>`
                    document.body.appendChild(posts);
                    posts.appendChild(postCom);
                }
            })
    })

