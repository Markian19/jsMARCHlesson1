// Все робити за допомоги js.

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let divCreat = document.createElement('div');
divCreat.classList.add('wrap');
divCreat.classList.add('collapse')
divCreat.classList.add('alpha')
divCreat.classList.add('beta')
divCreat.style.background = 'red';
divCreat.innerHTML = '<h1>some text</h1>';

document.body.append(divCreat);
let clon=divCreat.cloneNode(true);
document.body.append(clon)
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array = ['Main','Products','About us','Contacts']
for (const string of array) {
   let liElement = document.createElement('li');
   liElement.innerText = string
   let insertLi = document.getElementsByClassName('menu');
   insertLi[0].append(liElement)

}

//
// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const arItem of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.innerText = arItem.title + arItem.monthDuration;
//     document.body.append(divElement)
// }
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


//
// - Є масив
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const arItem1 of coursesAndDurationArray1) {
    let divElement1 = document.createElement('div');
    divElement1.classList.add('item');
    let h1Element = document.createElement('h1');
    h1Element.classList.add('heading')
    h1Element.innerText = arItem1.title
    let pElement = document.createElement('p');
    pElement.classList.add('description');
    pElement.innerText = arItem1.monthDuration
    pElement.style.fontSize = '20px'

    document.body.append(divElement1);
    divElement1.appendChild(h1Element);
    divElement1.appendChild(pElement);
}




// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

