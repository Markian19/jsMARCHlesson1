// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let form = document.createElement('form');
// form.setAttribute('id','form');
// form.style.marginTop = '10px'
// document.body.append(form);
//
// let input1 = document.createElement('input');
// input1.setAttribute('type','text');
//
// document.getElementById('form').append(input1)
// let input2 = document.createElement('input');
// input2.setAttribute('type','number');
//
// document.getElementById('form').append(input2);
//
// let button1 = document.createElement('button');
// button1.innerText = 'click Ok';
// button1.style.display = 'block'
// button1.onclick = function (){
//     localStorage.setItem('key',JSON.stringify(input1.value+input2.value))
// }
// document.body.append(button1);//неправильне рішення.

const forma1 = document.forms.form;
forma1.onsubmit = function (e){
    e.preventDefault();
    let name = this.name.value;
    let age = this.age.value;
    localStorage.setItem('some key',JSON.stringify({name,age}))
}





//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let {model,type,volume} = document.forms.form;
let btn = document.getElementById('btn');
let key= 'key';
let save = (model,type,volume) => {
    let stor = JSON.parse(localStorage.getItem(key)) || [];
    stor.push({model,type,volume});
    localStorage.setItem(key,JSON.stringify(stor))
}
btn.onclick =  () =>{  //якщо прописати декларування функції,результат не працює
    save(model.value,type.value,volume.value)
}
//