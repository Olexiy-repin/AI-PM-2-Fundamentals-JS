/*
 * - Function expression
 * - Псевдомасив arguments та Array.from
 */

//~ Function declaration (Можна викликати до оголошення в коді)

// greetUser('Winnie', 'Garcia');

// greetUser('Marie', 'Henderson');

// function greetUser(firstName, lastName) {
//   console.log(`Welcome ${firstName} ${lastName}!`);
// }

//~ Function expression (Викликати тільки після оголошення в коді)

// const greetUser = function (firstName, lastName) {
//   console.log(`Welcome ${firstName} ${lastName}!`);
// };

// greetUser('Oleksii', 'Repin');

//~ Псевдомасив arguments

// const fn = function () {
//   console.log('Hello from fn!');

//   console.log(arguments);

//   console.log(arguments[1]);
// };

// fn(10, 20, 30, 40, 50);

/*
TODO: Напиши функцію add для складання довільної кількості аргументів (чисел)
*/
// const add = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const item of arguments) {
//     total += item;
//   }

//   return total;
// };

// console.log(add(10, 20, 30)); // 60
// console.log(add(1, 2, 4, 5, 6)); // 18

/*
TODO: Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
TODO: та розраховує середнє арефметичне.
*/
// const calculateAverage = function () {
//   console.log(arguments);

//   let total = 0;

//   for (const item of arguments) {
//     total += item;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
