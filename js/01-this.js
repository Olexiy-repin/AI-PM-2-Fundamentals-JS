/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах.
// const user = {
//   firstName: 'Luis',
//   lastName: 'Neal',
//   age: 30,

//   showThis: function () {
//     console.log('this =', this);
//   },

//   showName: function () {
//     console.log(this.firstName);
//   },
// };

// console.log(user);

// user.showThis();
// user.showName();

//* Розглянемо як this поводиться у звичайних функціях.
//~ Function expression
// const showThis = function () {
//   console.log('this =', this);
// };

// showThis();

//~ Function declaration
// function showThis() {
//   console.log('this =', this);
// }

// showThis();

//* Присвоєння функції, як методу об'єкта.
// const showThis = function () {
//   console.log('this =', this);
// };

// showThis();

// const user = {
//   firstName: 'Allen',
//   lastName: 'Simpson',
//   age: 30,

//   showUserThis: showThis,
// };

// user.showUserThis();

//* Виклик методу об'єкта без контексту.
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('this =', this);
//   },

//   showUserName: function () {
//     console.log(this.name);
//   },
// };

// user.showUserThis();
// user.showUserName();

// const showThis = user.showUserThis;

// showThis();

// const showName = user.showUserName;

// showName();

//* This в callback функціях
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

// someFunction(user.showName);

/*
 * This в стрілочних функціях. Стрілочні функції не мають свого this,
 * this в стрілках завжди посилається на батьківський this.
 */
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: () => {
//     console.log('this =', this);
//   },
// };

// user.showThis();
