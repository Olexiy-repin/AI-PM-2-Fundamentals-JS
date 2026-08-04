/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const fn = function (a, b) {
//   console.log('Hello');
// };

// console.log(fn.length);
// console.log(fn.name);

// fn.test = 100;

// console.dir(fn);
// console.log(fn.test);

// TODO: Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, a, b) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Welcome');

// const user2 = {
//   firstName: 'Clyde',
//   lastName: 'Simmons',
//   age: 20,
// };

// showFullName.apply(user2, ['Hello']);

// TODO: Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// changeColor.call(hat, 'yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// changeColor.apply(sweater, ['blue']);

// console.log(sweater);

// TODO: Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

/*
const changeHatColor = function (color) {
  let this = hat;

  this.color = color;
};
*/

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('blue');

// console.log(hat);

// TODO: Передайте метод обʼєкта в якості callback функції
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('this =', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   // let callback = user.showName;
//   callback();
// };

// someFunction(user.showName.bind(user));
