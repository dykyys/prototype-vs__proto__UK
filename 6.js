function Car(model) {
  this.model = model;
}

Car.prototype.getModel = function () {
  console.log(this.model);
};

const audi = new Car('audi');
// console.log(audi.__proto__ === Car.prototype); //що буде в консолі?

const volvo = new Car('volvo');
// console.log(volvo.__proto__); //що буде в консолі?

//===============================
// console.log({}.prototype === {}.__proto__);

//===============================
function Component() {}
// console.log(Component.prototype === Component.__proto__);
// console.log(Car.prototype);

//===============================
function ComponentB() {}
// console.log(Component.__proto__ === ComponentB.__proto__);
// console.log(Component.prototype === ComponentB.prototype);
// console.log(Component.prototype);
//===============================
const arrowAdd = () => {};
// console.log(arrowAdd.prototype === Object.prototype);
// console.log(arrowAdd.prototype);
//===============================
const valueA = 5;
// console.log(valueA.prototype === Number.prototype);
// console.log(valueA.__proto__ === Number.prototype);

//===============================
// console.log(Car.__proto__ === Function.prototype);
// console.log(Car.__proto__ === ???)

//===============================
const age = 21;
// console.log(age.__proto__ === Number.prototype);
// console.log(age.__proto__.__proto__ === Number.prototype.__proto__);
// console.log(
//   age.__proto__.__proto__.__proto__ === Number.prototype.__proto__.__proto__
// );
// console.log(Number.prototype.__proto__ === Object.prototype);
// console.log(
//   Number.prototype.__proto__.__proto__ === Object.prototype.__proto__
// );

// console.log(age.__proto__.__proto__.__proto__ === Object.prototype.__proto__);

//Цей запис має сенс? якщо так, то що потрібно вказати, щоб було true?

// console.log(age.__proto__.__proto__.__proto__ === null);
