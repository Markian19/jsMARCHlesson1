// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value =>value.json())
//     .then(element => {
//         let wrap = document.createElement('div');
//         wrap.classList.add('wrap')
//         for (const valueElement of element) {
//             let elemDiv = document.createElement('div');
//             elemDiv.classList.add('valueElement');
//             elemDiv.innerHTML = `<h3>${valueElement.id}</h3> <h2>${valueElement.title}</h2> <p>${valueElement.body}</p>`;
//             document.body.appendChild(wrap);
//             wrap.appendChild(elemDiv);
//         }
//     })
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(comments =>{
//         let wrap2 = document.createElement('div');
//         wrap2.classList.add('wrap2');
//         for (const comment of comments) {
//             let commentDiv = document.createElement('div');
//             commentDiv.classList.add('comment');
//             commentDiv.innerHTML = `<h3>${comment.id}</h3> <h4>${comment.name}</h4> <h4>${comment.email}</h4> <p>${comment.body}</p>`
//             document.body.appendChild(wrap2);
//             wrap2.appendChild(commentDiv)
//         }
//     })


// //  Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
//  // https://jsonplaceholder.typicode.com/posts
// //     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts =>{
//         let wrap3 = document.createElement('div');
//         wrap3.classList.add('wrap3');
//         document.body.appendChild(wrap3);
//         for (const post of posts) {
//             let postId = document.createElement('div');
//             postId.classList.add('post');
//             wrap3.appendChild(postId);
//             postId.innerHTML = `<h3>${post.id}</h3> <h2>${post.title}</h2> <p>${post.body}</p>`
//             let button = document.createElement('button');
//             button.innerText = 'click'
//             postId.appendChild(button);
//             button.onclick = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                     .then(value => value.json())
//                     .then(value => {
//                         let commentWrap = document.createElement('div');
//                         commentWrap.classList.add('commentWrap');
//                         postId.appendChild(commentWrap)
//                         for (const valueElement of value) {
//                             let commentDiv = document.createElement('div');
//                             commentDiv.classList.add('comment1');
//                             commentDiv.innerHTML = `<p>${valueElement.Id} ${valueElement.id} ${valueElement.name} ${valueElement.email} ${valueElement.body}</p>`
//                             commentWrap.appendChild(commentDiv);
//                         }
//                     })
//             }
//
//
//
//
//         }
//     })
