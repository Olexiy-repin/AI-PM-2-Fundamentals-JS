/*
 * Метод forEach(callback)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно переривати цикл
 */

// const numbers = [5, 10, 15, 20, 25];

// console.log(numbers);

// numbers.forEach((el, idx, arr) => {
//   console.log(`el = ${el}, idx = ${idx}`);
// });

/*
TODO: Виконайте рефакторинг коду за допомогою методу forEach та стрілочних функцій.
 */
// const logItems = items => {
//   console.log(items);

//   // for (let i = 0; i < items.length; i++) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   //~ Повна версія колбек функції
//   // items.forEach((el, idx, arr) => {
//   //   console.log(`${idx + 1} - ${el}`);
//   // });

//   //~ Скорочена версія колбек функції
//   items.forEach((el, idx) => console.log(`${idx + 1} - ${el}`));
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
TODO: Виконайте рефакторинг коду за допомогою методу forEach та стрілочних функцій.
 */
// const calculateAverage = (...args) => {
//   let total = 0;

//   // for (let i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }

//   //~ Повна версія колбек функції
//   // args.forEach((el, idx, arr) => {
//   //   total += el;
//   // });

//   //~ Скорочена версія колбек функції
//   args.forEach(el => (total += el));

//   return total / args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
