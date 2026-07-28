/*
 * Стрілочні функції
 * - Оголошення
 * - Явне і неявне поверненя
 * - Псевдомасив arguments (...args)
 * - Інлайн стрілочні функції
 */

//~ Без параметрів
// const greetUser = () => {
//   console.log('Welcome user!');
// };

// greetUser();

//~ Два і більше параметрів
// const greetUserByFullname = (firstName, lastName) => {
//   console.log(`Welcome ${firstName} ${lastName}`);
// };

// greetUserByFullname('Connor', 'Flores');

//~ Один параметр
// const greetUserByFirstName = firstName => {
//   console.log(`Welcome ${firstName}!`);
// };

// greetUserByFirstName('Oleksii');

//~ arguments
// const fn = (...args) => {
//   console.log(args);
// };

// fn(12, 33, 23);

//~ Неявне повернення
// const sum = (numA, numB) => numA + numB;

// console.log(sum(10, 20));
// console.log(sum(100, 5));

//~ Неявне повернення обʼєкта
// const addId = user => ({ id: Date.now(), ...user });

// console.log(
//   addId({
//     firstName: 'Carolyn',
//     lastName: 'Smith',
//   })
// );

/*
TODO: Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const createProduct = (partialProduct, callback) => {
//   const product = {
//     id: Date.now(),
//     ...partialProduct,
//   };

//   callback(product);
// };

// const logProduct = product => {
//   console.log(product);
// };

// const logTotalPrice = product => {
//   console.log(product.price * product.quantity);
// };

// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'lemon', price: 20, quantity: 5 }, logTotalPrice);

/*
TODO: Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/
// const each = (array, callback) => {
//   console.log(array);

//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

//~ Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );

//~ Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

//~ Повна версія
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );

//~ Скорочена версія
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

//~ Повна версія
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   })
// );

//~ Скорочена версія
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
