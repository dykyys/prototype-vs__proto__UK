const guestName = 'Манго';

const valueA = 5;

// console.log(guestName.__proto__ === String.prototype);
// console.log(valueA.__proto__ === Number.prototype);
// console.log(valueA.__proto__ === guestName.__proto__);

const book = {
  title: 'The Last Kingdom',
};

const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(book.__proto__ === clients.__proto__);

// console.log(book.__proto__ === Object.prototype);
// console.log(clients.__proto__ === Array.prototype);

const location = {
  country: 'Jamaica',
  city: 'Ocho Rios',
};

// console.log(location.__proto__ === book.__proto__);

//Різні по "типу" об'єкти у властивості __proto__ мають зовсім різні,
//незалежні об'єкти.

//У однакових за типом об'єктів, у властивості __proto__ зберігається посилання
//на той самий об'єкт, тому вони рівні.

//Різні по "типу" об'єкти, це означає, що при створенні об'єкта
//використовувалися різні класи чи функції конструктори

//У будь-якого об'єкта є властивість __proto__
// Щоб розуміти, що це за __proto__, потрібно точно знати
//за допомогою якої функції-конструктора (класу) створено даний об'єкт

//Вбудовані функції-конструктори (вони ж класи)
//Object, Promise, Function, Boolean, Number, String, Array

const promise = new Promise(() => {}); //new Promise(...)
const man = {}; // new Object(...)
const users = []; // new Array(...)

function multiply() {} // new Function(...)
const fn = function () {}; // new Function(...)
const arrowAdd = () => {}; // new Function(...)
class User {} // new Function(...)

// console.log(multiply.__proto__ !== fn.__proto__);
// console.log(arrowAdd.__proto__ !== User.__proto__);
const age = 21; // new Number(...) //При такому зверненні в пам'яті тимчасово створюється об'єктна версія цього примітиву
const name = 'Ajax'; //new String (...) //При такому зверненні в пам'яті тимчасово створюється об'єктна версія цього примітиву
const areYouOkey = true; //new Boolean(...) //При такому зверненні в пам'яті тимчасово створюється об'єктна версія цього примітиву
