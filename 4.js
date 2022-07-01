const guestName = 'Манго';
// console.log(guestName.__proto__ === String.prototype);

const valueA = 5;
// console.log(valueA.__proto__ === Number.prototype);

const book = {
  title: 'The Last Kingdom',
};
// console.log(book.__proto__ === Object.prototype);
// console.log(book.prototype);
//У будь-якого об'єкта є __proto__

//prototype є в класу чи функції конструктора

//__proto__ будь-якого об'єкта посилається на prototype класу / функції конструктора,
//за допомогою якої було створено (сконструйовано)

function Component() {}

const newComponent = new Component();

// console.log(newComponent.__proto__ === Component.prototype);
