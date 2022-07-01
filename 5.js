const book = {
  title: 'The Last Kingdom',
};
// console.log(book.__proto__);
// console.log(book.prototype);
// const mango = new User("Mango");
class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name);
  }
}

// const mango = new User("Mango");
// console.log(User.__proto__ === Function.prototype);
// console.log(User.prototype.__proto__ === Function.prototype.__proto__);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype);
// console.log(Object.prototype.__proto__);
// console.log(User.prototype.__proto__ === Object.prototype);

const arrowAdd = () => {};
// console.log(arrowAdd.prototype);
// console.log(arrowAdd.__proto__);
// console.log(Function.__proto__ === Function.prototype);
// console.log(Function.prototype.__proto__ === Object.prototype);
// console.log(Function.prototype.__proto__.__proto__);
// console.log(
//   Function.prototype.__proto__.__proto__ === Object.prototype.__proto__
// );

function Component() {}
function Component1() {}
// console.log(Component.prototype === Component1.prototype);
// console.log(Component.__proto__ === Component1.__proto__);
// console.log(Component.prototype.__proto__ === Object.prototype);
const age = 21;
// console.log(age.__proto__.__proto__.__proto__ === Object.prototype.__proto__);
// console.log(Number.prototype.__proto__ === Object.prototype);
// console.log(Boolean.prototype.__proto__ === Object.prototype);
