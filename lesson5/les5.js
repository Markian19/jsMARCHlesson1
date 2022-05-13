
// //     Переробити на стрілочні функції з попереднього дз
//
// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a,b) =>a*b;
console.log(rectangle(20,12));
//
// // - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (c,d) => Math.pow((c*d),2);
console.log(circle(3.14,7))
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder = (r,h,p) => 2*p*r*(r+h);
console.log(cylinder(4,10,3.14));///////чому результат 336,а не 351.68  ???????/////
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
let array = (array) => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}
array(['element1','element2','element3'])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paragraf = (text) => document.write(`<p>${text}</p>`);
paragraf('some text');
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (textList) => {document.write(`<ul>`);
document.write(`<li>${textList}</li>`);
document.write(`<li>${textList}</li>`);
document.write(`<li>${textList}</li>`);
document.write(`</ul>`);
}
list('some text')
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list1 = (textList1,size) =>{
    for (let i = 0; i < size; i++) {
        document.write(`<li>${textList1}</li>`);
    }
    document.write(`</ul>`);
}
list1('some text',5)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = (arr) =>{
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<li>${arr[i]}</li>`)
    }

    document.write(`</ul>`);
}
arr(['text',33,'string',true,123,9])
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
let obj = (array) =>{
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id} - ${ arrayElement.name} - ${ arrayElement.age}</div>`)
    }
}
obj([
    {id:'male',name:'petya',age:23},
    {id:'male',name:'vasya',age:54},
    {id:'female',name:'lida',age:33},
])
// // - створити функцію яка повертає найменьше число з масиву
let someNum = (array) =>{
    let min = array[0];
    for (const element of array) {
        if(element < min){
            min = element;
        }
    }
    return min;
}
    console.log(someNum([123,88,40,51,1,10,390,48,500]))
//
//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
let arrr = (arrr1) =>{
    let result = 0;
    for (const arrr1Element of arrr1) {
        result= result+arrr1Element;
    }
    return result;
}
console.log(arrr([12,55,98,18,9,11]))
// //
// // -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let mus2 = [
    {id:'male',name:'petya',age:23},
    {id:'male',name:'vasya',age:54},
];
let revers = mus2.reverse();
console.log(revers);


// Все стірлочними!!!!!!!!!

//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let array1 = [2,6,13,45,66,9];
let arrayArf = () =>{
    let num = 0
    for (const argument of array1) {
    num+= argument;
    }
    return num/array1.length;
}
console.log(arrayArf(array1))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);
let minMax = (...arg) =>{
    let min = arg[0];
    let max = arg[0];
    for (const argElement of arg) {
        if (argElement < min){
        min = argElement;
        }
        if (argElement > max){
            max = argElement;
        }
    }
    console.log(max);
    return min
}
console.log(minMax(4,12,9.33,40,7));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let freeFarray = () =>{
    let ar = [];
    for (let i = 0; i < 100; i++) {
         ar.push(Math.round(Math.random()*100))
    }
    return ar
}
console.log(freeFarray())
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
let freeFarray2 = (limit) =>{
    let ar2 =[];
    for (let i = 0; i < limit; i++) {
        ar2.push(Math.round(Math.random()*100))
    }
return ar2
}
console.log(freeFarray2(10));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arr2 = [1,2,3];
let rev = (rarr) =>{
    let newAr =[]
    for (let i = rarr.length - 1; i >= 0; i--) {
        newAr.push(rarr[i]);
    }
    return newAr;
}
console.log(rev(arr2))
