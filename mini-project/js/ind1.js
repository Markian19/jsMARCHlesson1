fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {

        let allWrap = document.createElement('div');
        allWrap.classList.add('wrap');


        for (const itemUser of value) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.innerHTML = `<h4>userID:${itemUser.id}</h4>  <h4>userTitle:${itemUser.name}</h4>`
            let creatButton = document.createElement('button');
            creatButton.setAttribute('id','button1');
            creatButton.innerText = 'click';
            creatButton.onclick = () =>{
                localStorage.setItem('userId',itemUser.id);//не робив JSON.stringify/JSON.parse
                location.href = 'user-details.html';
            }
            document.body.appendChild(allWrap);
            allWrap.appendChild(userDiv);
            userDiv.appendChild(creatButton);
        }
    })



