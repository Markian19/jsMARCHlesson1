// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let element = document.createElement('div');
element.setAttribute('id','text');
element.style.background  = 'red';
element.style.width = '150px';
element.style.height = '140px';

document.body.append(element)
let tex = document.getElementById('butt')//є цікава штука коли я присвоїв button class"butt",а не id,і застилізував,нічого не працювало.
    tex.onclick = function (){
    element.style.display = 'none'
}
//
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let input = document.createElement('input');
input.type = 'number'
input.style.marginTop = '30px'

let button = document.createElement('button');
button.innerText = 'click Ok';
button.style.display = 'block'
button.addEventListener('click',function () {
    if (input.value > 18){
        console.log('some text')
    }else{
        console.log('not 18')
    }
})


document.body.append(input);
document.body.append(button);//якщо інпут і батон приєднати до створеного елементу форм-то не працюватиме.
//
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let form1 = document.createElement('form');
form1.setAttribute('id','form');
form1.style.marginTop = '10px'
document.body.append(form1);

let input1 = document.createElement('input');
input1.setAttribute('type','text');
document.getElementById('form').append(input1)

let input2 = document.createElement('input');
input2.setAttribute('type','text');
document.getElementById('form').append(input2)

let form2 = document.createElement('form');
form2.setAttribute('id','form');
document.body.append(form1);

let input3 = document.createElement('input');
input3.setAttribute('type','text');
document.getElementById('form').append(input3)

let input4 = document.createElement('input');
input4.setAttribute('type','text');
document.getElementById('form').append(input4)

let button1 = document.createElement('button');
button1.innerText = 'click Ok';
button1.style.display = 'block'
button1.onclick = function (){
  console.log(input1.value);
    console.log(input2.value);
    console.log(input3.value);
    console.log(input4.value);
}
document.body.append(button1)
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let inputOne = document.createElement('input');
inputOne.setAttribute('type','number');
inputOne.style.marginTop = '10px'
let inputSecond = document.createElement('input');
inputSecond.setAttribute('type','number');
let inputThird = document.createElement('input');
inputThird.setAttribute('type','text');

let buttonOne = document.createElement('button');
buttonOne.innerText = 'click Ok';
buttonOne.style.display = 'block'
buttonOne.onclick = function () {
    let col1 = inputOne.value;
    let col2 = inputSecond.value;
    let col3 = inputThird.value;
 function table(col1, col2, col3) {
     let createTable = document.createElement('table');
     document.body.append(createTable);
     for (let i = 0; i < col1; i++) {
       let col1 = document.createElement('tr');
         createTable.append(col1);

         for (let j = 0; j < col2; j++) {
            let col2 = document.createElement('td');
            createTable.append(col2)
             col2.innerText = `${col3}`
             col2.style.border = '1px solid black'
             col1.append(col2)
         }
     }
 }
 table(col1,col2,col3);

}

document.body.append(inputOne,inputSecond,inputThird,buttonOne);
