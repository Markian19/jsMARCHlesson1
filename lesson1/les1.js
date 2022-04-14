/////////////errors1/////////
{
    let a = 100;
    let b = 500;
    let c = "hello";
    let d = "okten";
    const x = 'constant value';
    console.log(a,b,c,d,x);
}
let b = 'new value';
let y = 'new value';
let result = 100 + y +b;
console.log(result);
///////////////////////////////tasks////////////////////////////////////////////

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
let c = 'owu';
let d = 'com';
let e = 'ua';
let f = 1;
let g = 10;
let h = -999;
let i = 123;
console.log(a,c,d,e,f,g,h,i);
document.write(a,' ',c,' ',d,' ',e,f,g,h,i)//щоб не виводити на кожне значення,об'єднав//
// alert(a,c,d,e,f,g,h,i)


// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
let book = {
    name : 'some book',
    page : 100 ,
    genre: 'fantastic'
};
console.log(book);


// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

let book1 = {
    name : 'some book',
    page : 100 ,
    genre: 'fantastic',
    autor : ['autor1','autor2','autor3']

};
console.log(book1.autor[0]);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Markiian';
let middleName = 'Volodymyrovych';
let lastName = 'Dzvonyk'
let person = firstName +' '+ middleName +' '+ lastName;
console.log(person)


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let fName = prompt('Markian');
let mName = prompt('Volodymyrovych');
let lName = prompt('Dzvonyk');
console.log(fName+' '+mName+' '+lName);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let aa = 100;
console.log(typeof aa);
let bb = '100';
console.log(typeof bb);
let cc = true;
console.log(typeof cc);

// - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт
let books = [
    {name: 'some bok1', page: 90, genre:'horror', author:'some author1'},//0
    {name: 'some bok2', page: 190, genre:'fantastic', author:'some author2'},//1
    {name: 'some bok3', page: 210, genre:'horror', author:'some author3'},//2
    {name: 'some bok4', page: 70, genre:'detectiv', author:'some author4'},//3
]
console.log(books[2]);
//////////////////////////////////additional///////////////////////////////////////////

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let h1 = 23;
let b1 = 10;
let c1 = h1 * b1;
console.log(c1);
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let d1 = Math.pow(4,2);
const p = 3.14
let v= (heightC * p * d1)/4;
console.log(v);
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
//
let n = 3;
let m = 4;
let k = Math.pow(n,2)+Math.pow(m,2);
console.log(Math.sqrt(k));

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6); //false
console.log(5 === 6); //false
console.log(10 == 10);// true
console.log(10 === 10);//true
console.log(10 != 10);// false
console.log(10 !== 10);//false
console.log(10 < 10);// false
console.log(123 === '123');//false
console.log(123 == '123');//true