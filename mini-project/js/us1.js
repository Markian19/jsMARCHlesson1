let allWrap1 = document.createElement('div');
allWrap1.classList.add('allWrap1');
let userId = localStorage.getItem('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
.then(value => value.json())
.then(value => {
    let userInf = document.createElement('div');
    userInf.classList.add('userInf');
    userInf.innerHTML = `<h4>ID: ${value.id}</h4>
                 <h5>Name: ${value.name}</h5>
                 <h5>Username: ${value.username}</h5>
                 <h5>Email: ${value.email}</h5>
                 <h5>Street: ${value.address.street}</h5>
                 <h5>Suite: ${value.address.suite}</h5>
                 <h5>City: ${value.address.city}</h5>
                 <h5>Zipcode: ${value.address.zipcode}</h5>
                 <h5>Lat: ${value.address.geo.lat}</h5>
                 <h5>Lng: ${value.address.geo.lng}</h5>
                 <h5>Phone: ${value.phone}</h5>
                 <h5>Website: ${value.website}</h5>
                 <h5>Company Name: ${value.company.name}</h5>
                 <h5>CatchPhrase: ${value.company.catchPhrase}</h5>
                 <h5>Bs: ${value.company.bs}</h5>`
    document.body.appendChild(allWrap1);
    allWrap1.appendChild(userInf);

    let creatButton2 = document.createElement('button');
    creatButton2.classList.add('commentButton');
    creatButton2.innerText = 'user comments'
    document.body.appendChild(creatButton2);

    creatButton2.onclick =()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value1 => value1.json())
            .then(value1 => {
                let commentWrap = document.createElement('div');
                commentWrap.classList.add('comment1');
                userInf.appendChild(commentWrap);

                for (const item of value1) {
                    let commentDiv = document.createElement('div');
                    commentDiv.classList.add('comment');
                    commentDiv.innerHTML = `<h4>title:${item.title}</h4>`;

                    let commentButton = document.createElement('button');
                    commentButton.classList.add('comButton');
                    commentButton.innerText = 'comment';
                    commentButton.onclick = () =>{
                        localStorage.setItem('userId',item.id)
                        location.href = 'post-details.html';

                    }
                    document.body.appendChild(commentWrap);
                    commentWrap.appendChild(commentDiv);
                    commentDiv.appendChild(commentButton);

                }
            })
    }



})