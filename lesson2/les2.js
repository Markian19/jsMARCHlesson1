// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 4;
if(a ===0){
    console.log('false')
}else {
    console.log('true')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 33;  //(можна зробити через let time = +prompt('enter number')
if(time >=0 && time <14){
    console.log('first part');
}else if(time >= 15 && time <29 ){
    console.log('second part');
}else if(time >=30 && time <44){
    console.log('third part');
}else if(time >=45 && time ===60){
    console.log('fourth part')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('enter day');
if(day >= 1 && day <=10){
    console.log('first');
}else if(day >=11 && day<=20){
    console.log('second');
}else if(day >=21 && day <=31){
    console.log('third');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber =+prompt('enter number');
switch (dayNumber){
    case 1:
        console.log('info1');
        break;
    case 2:
        console.log('info2');
        break;
    case 3:
        console.log('info3');
        break;
    case 4:
        console.log('info4');
        break;
    case 5:
        console.log('info5')
        break;
    case 6:
        console.log('info6')
        break;
    case 7:
        console.log('info7')
        break;
    default:
        console.log('default')

}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let firstNum = +prompt('enter number');
let secondNum = +prompt('enter second number')
if(firstNum > secondNum){
    console.log(firstNum)
} else if(secondNum > firstNum){
    console.log(secondNum)
}else if(firstNum === secondNum){
    console.log(firstNum, 'these numbers are equal')
}