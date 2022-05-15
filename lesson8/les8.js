// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let getIdcon = document.getElementById('content');
const text = getIdcon.innerText;
console.log(text);

// -- отримує текст з блоку з id "rules"
let getIDruls = document.getElementById('rules');
const text1 = getIDruls.innerText;
console.log(text1);
// -- замініть текст параграфа з id 'content' на будь-який інший
let getIdcon2 = document.getElementById('content');
getIdcon2.innerText = 'some new text'

// -- замініть текст параграфа з id 'rules' на будь-який інший
let getIdrules2 = document.getElementById('rules');
getIdrules2.innerText = 'some new text2'
// -- змініть кожному елементу колір фону на червоний
let allElement = document.body.children
for (const child of allElement) {
    child.style.background= 'red'
}

// -- змініть кожному елементу колір тексту на синій
let allElementtext = document.querySelectorAll('*');
for (const allElementtextElement of allElementtext) {
    allElementtextElement.style.color = 'blue'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let getIdrules3 = document.getElementById('rules');
console.log(getIdrules3.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let getIdrFc_rules = document.getElementsByClassName('fc_rules');
for (const idrFcRule of getIdrFc_rules) {
    idrFcRule.style.color = 'white'
}
//
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let addClass = document.getElementById('main_header');
addClass.className = 'new name';

// b) робить шириниу елементу ul 400px
let ulWeight = document.getElementsByTagName('ul');
for (const ulWeightElement of ulWeight) {
    ulWeightElement.style.width = '400px'
}


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let clElemLink = document.getElementsByClassName('linkList');
for (const clElemLinkElement of clElemLink) {
    clElemLinkElement.style.width = '50%'
}

// d) отримує текст який зберігається в елементі з класом listElement2
let getTextlistelement2 = document.getElementsByClassName('listElement2')
for (const textlistelement2Element of getTextlistelement2) {
    console.log(textlistelement2Element.innerText);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
let getLi = document.getElementsByTagName('li')
for (const liElement of getLi) {
    liElement.style.background = 'silver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let getA = document.getElementsByTagName('a')
for (const aElement of getA) {
    aElement.className = 'anchor'
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let getA2 = document.getElementsByTagName('a')
for (const a2Element of getA2) {
    if(a2Element.innerText === 'link3'){
        a2Element.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let getA3 = document.getElementsByTagName('a');
for (const a3Element of getA3) {
    a3Element.classList.add(`${a3Element.innerText}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let getSub = prompt('enter color');
    let subH = document.getElementsByClassName('sub-header');
for (const subHElement of subH) {
    subHElement.style.background = getSub;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let getSub2 = prompt('enter color');
let subH2 = document.getElementsByClassName('sub-header');
for (const subH2Element of subH2) {
if(subH2Element.innerText === 'content 2 segment'){
    subH2Element.style.color = getSub2
}
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let textContent_1 = prompt('enter text')
let getContent = document.getElementsByClassName('content_1');
for (const contentElement of getContent) {
    contentElement.innerText = textContent_1
}

// l) отримати елементи p та змінити їм padding на 20px
let getP = document.getElementsByTagName('p');
for (const pElement of getP) {
    pElement.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let getT2 = document.getElementsByClassName('text2');
for (const t2Element of getT2) {
    t2Element.innerText = 'SOME TEXT'
}