//Об'єкт, який одночасно є класом або функцією є prototype
class User {}
function Component() {}
const API = function () {};

// console.log(User.prototype);
// console.log(Component.prototype);
// console.log(API.prototype);

// console.log(Object.prototype);
// console.log(Promise.prototype);
// console.log(Function.prototype);
// console.log(Boolean.prototype);
// console.log(Number.prototype);
// console.log(String.prototype);
// console.log(Array.prototype);

//Знаючи за допомогою якого класу/функції-конструктора був
//Створено наш об'єкт, ми можемо визначити посилання на який prototype зберігатися в
//властивості __proto__ нашого об'єкта

// console.log(Object.prototype === Array.prototype); // false
// console.log(Object.prototype === Array.prototype.__proto__); // true
// console.log(Object.prototype.__proto__); // null

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//Кожен прототип це незалежний об'єкт,
//з певним набором властивостей та методів
