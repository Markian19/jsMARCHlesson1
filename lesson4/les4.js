// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a,b) {
let res = a*b;
return res;
}
let res = rectangle(20,12)
console.log(res)
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(c,d) {
    let result = Math.pow((c*d),2);
    return result;
}
let result = circle(3.14,7);
console.log(result)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(r,h,p) {
   let square = 2*p*r*(r+h);
   return square
}
let square = cylinder(4,10,3.14);
console.log(square);
// - створити функцію яка приймає масив та виводить кожен його елемент
let array = ['element1','element2','element3'];
function iterstor(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
iterstor(array);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text) {
    document.write(`<p>${text}</p>`)
}
paragraf('some text')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(textList) {
    document.write(`<ul>`);
        document.write(`<li>${textList}</li>`);
        document.write(`<li>${textList}</li>`);
        document.write(`<li>${textList}</li>`);
    document.write(`</ul>`)
}
list('some text')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list1(textList1,size) {
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${textList1}</li>`);
    }
    document.write(`</ul>`);
}
list1('some text',7)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = ['text',33,'string',true,123,9];
function someListt() {
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<li>${arr[i]}</li>`)
    }

    document.write(`</ul>`);
}
someListt()
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.


function object(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${ arrayElement.name} - ${ arrayElement.age}</div>`)
    }
}
let obj = [
    {id:'male',name:'petya',age:23},
    {id:'male',name:'vasya',age:54},
    {id:'female',name:'lida',age:33},
]
object(obj)
// - створити функцію яка повертає найменьше число з масиву
let maxArray1 = [123,88,40,51,1,10,390,48,500]
function arrayMax1(array) {
    let min = array[0];
    for (const element of array) {
        if(element < min){
            min = element;
        }
    }
    return min;
}
console.log(arrayMax1(maxArray1))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrr = [12,55,98,18,9,11]
function arrr1(sum){
    let result = 0;
    for (const sumElement of sum) {
        result = result + sumElement;
    }
    return result;
}
console.log(arrr1(arrr))