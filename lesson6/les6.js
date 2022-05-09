// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 ='hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool'
console.log(str3.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase = str1.toUpperCase();
console.log(toUpperCase);
let toUpperCase2 = str2.toUpperCase();
console.log(toUpperCase2);
let toUpperCase3 = str3.toUpperCase();
console.log(toUpperCase3);
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase = toUpperCase.toLowerCase();
console.log(toLowerCase);
let toLoverCase2 = toUpperCase2.toLowerCase();
console.log(toLoverCase2);
let toLoverCase3 = toUpperCase3.toLowerCase();
console.log(toLoverCase3);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim())
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let string = 'Ревуть воли як ясла повні';
// let arr = stringToarray(string); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = 'Ревуть воли як ясла повні';
console.log(string.split(' '))

//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let mapArr = arr.map(function (value) {

    return value +''
});
console.log(mapArr);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
    console.log(nums.sort((n1,n2) => n1 - n2 ));
console.log(nums.sort((n1,n2) => n2 - n1 ));
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.sort((a,b) => b.monthDuration-a.monthDuration))
let filtr = coursesAndDurationArray.filter(value1 => value1.monthDuration > 5);
console.log(filtr)

//

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let newArray = [

    {cardSuit: 'heart', value: '6', color: 'red'},

        {cardSuit: 'heart', value: '7', color: 'red'},

        {cardSuit: 'heart', value: '8', color: 'red'},

        {cardSuit: 'heart', value: '9', color: 'red'},

        {cardSuit: 'heart', value: '10', color: 'red'},

        {cardSuit: 'heart', value: 'jack', color: 'red'},

        {cardSuit: 'heart', value: 'queen', color: 'red'},

        {cardSuit: 'heart', value: 'king', color: 'red'},

        {cardSuit: 'heart', value: 'ace', color: 'red'},

        {cardSuit: 'diamond', value: '6', color: 'red'},

        {cardSuit: 'diamond', value: '7', color: 'red'},

        {cardSuit: 'diamond', value: '8', color: 'red'},

        {cardSuit: 'diamond', value: '9', color: 'red'},

        {cardSuit: 'diamond', value: '10', color: 'red'},

        {cardSuit: 'diamond', value: 'jack', color: 'red'},

        {cardSuit: 'diamond', value: 'queen', color: 'red'},

        {cardSuit: 'diamond', value: 'king', color: 'red'},

        {cardSuit: 'diamond', value: 'ace', color: 'red'},

        {cardSuit: 'spade', value: '6', color: 'black'},

        {cardSuit: 'spade', value: '7', color: 'black'},

        {cardSuit: 'spade', value: '8', color: 'black'},

        {cardSuit: 'spade', value: '9', color: 'black'},

        {cardSuit: 'spade', value: '10', color: 'black'},

        {cardSuit: 'spade', value: 'jack', color: 'black'},

        {cardSuit: 'spade', value: 'queen', color: 'black'},

        {cardSuit: 'spade', value: 'king', color: 'black'},

        {cardSuit: 'spade', value: 'ace', color: 'black'},

        {cardSuit: 'clubs', value: '6', color: 'black'},

        {cardSuit: 'clubs', value: '7', color: 'black'},

        {cardSuit: 'clubs', value: '8', color: 'black'},

        {cardSuit: 'clubs', value: '9', color: 'black'},

        {cardSuit: 'clubs', value: '10', color: 'black'},

        {cardSuit: 'clubs', value: 'jack', color: 'black'},

        {cardSuit: 'clubs', value: 'queen', color: 'black'},

        {cardSuit: 'clubs', value: 'king', color: 'black'},

        {cardSuit: 'clubs', value: 'ace', color: 'black'},

        {value: 'joker'},

        {value: 'joker'}

    ];