// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id,name,surname,email,phone) {
    this.id = id
    this.UserName = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

console.log(User);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arrayUser =[
    new User(3,'Volodja','Pupkin','pup@gmail.com','+380934589567'),
    new User(2,'Sasha','Upkin','pup@gmail.com','+380934589567'),
    new User(1,'Masha','Pupkinn','pup@gmail.com','+380934589567'),
    new User(4,'Vitalik','Pkin','pup@gmail.com','+380934589567'),
    new User(5,'Vlad','PPupkin','pup@gmail.com','+380934589567'),
    new User(6,'Olga','Puppkin','pup@gmail.com','+380934589567'),
    new User(10,'Anna','Pupk','pup@gmail.com','+380934589567'),
    new User(8,'Petja','Pupn','pup@gmail.com','+380934589567'),
    new User(9,'Marina','Pupkim','pup@gmail.com','+380934589567'),
    new User(7,'Vasja','Pupka','pup@gmail.com','+380934589567'),


];


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = arrayUser.filter(value => value.id%2 ===0);
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = arrayUser.sort((a,b) => a.id - b.id)
console.log(sortUser)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
 constructor(id, name, surname , email, phone, order) {
     this.id = id;
     this.UserName = name;
     this.surname = surname;
     this.email = email;
     this.phone = phone;
     this.order = order;
 }
}

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let client =[
    new Client(3,'Volodja','Pupkin','pup@gmail.com','+380934589567',['desk']),
    new Client(5,'Volodja','Pupkin','pup@gmail.com','+380934589567',['desk','wood','metal','stoun','bord']),
    new Client(2,'Volodja','Pupkin','pup@gmail.com','+380934589567',['desk','metal']),
    new Client(4,'Volodja','Pupkin','pup@gmail.com','+380934589567',['desk','wood','metal','stoun']),
    new Client(1,'Volodja','Pupkin','pup@gmail.com','+380934589567',['wood','metal','stoun']),
    new Client(6,'Volodja','Pupkin','pup@gmail.com','+380934589567',['desk','desk','wood','metal','stoun','bord']),

]
let sortClient = client.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);
//

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,producer,year,maxSpeed,engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const carKey in this) {
          console.log(`${carKey} - ${this[carKey]} `)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed +=newSpeed
    };
    this.changeYear = function (newValue) {
        this.year = newValue
    };
    this.addDriver = function (driver) {
        this.driver = driver
    }
}
let newCar = new Car('panamera','porshe',2020,320,4)
newCar.drive()
newCar.info()
newCar.increaseMaxSpeed(80)
console.log(newCar);
newCar.changeYear(2022)
console.log(newCar)
newCar.addDriver('ivan')
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Car1 {
    driver;
    constructor(model,producer,year,maxSpeed,engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info () {
        for (const car1Key in this) {
            console.log(`${car1Key} - ${this[car1Key]}`)
        }
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed +=newSpeed
    }
    changeYear (value) {
        this.year = value
    }
    addDriver (driver){
        this.driver = driver
    }
}
let newCar1 = new Car1('panamera','porshe',2020,320,4)
newCar1.drive();
newCar1.info();
newCar1.increaseMaxSpeed(50);
console.log(newCar1);
newCar1.changeYear(2030);
console.log(newCar1);
newCar1.addDriver('Max')
console.log(newCar1)

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderela {
    constructor(name,age,footSize,) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cinderelas = [
    {name : 'Anna',age : 22,footSize : 39},
    {name : 'Ira',age : 27,footSize : 36},
    {name : 'Olena',age : 24,footSize : 37},
]

class prince {
    constructor(princeName,princeAge,shoseSize) {
        this.princeName = princeName;
        this.princeAge = princeAge;
        this.shoseSize = shoseSize;

    }

}
let princeCinderela = new prince('Vasya',33,36)

let truCinderela =  (cind,prince) =>{
    for (const cinderelasKey in cinderelas) {
        if(cinderelasKey.footSize === princeCinderela.shoseSize ){
            return `${cinderelasKey.name}`
        }
    }
}
console.log(truCinderela(cinderelas, princeCinderela));///undefined(помилка мабуть в циклі або в if)

let cind = cinderelas.find(value => value.footSize === princeCinderela.shoseSize);
console.log(cind);