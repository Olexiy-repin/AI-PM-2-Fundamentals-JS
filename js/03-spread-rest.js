/*
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

/*
TODO: Створення копії масиву примітивів
*/
// const values = [23, 34, 4, 5];
// const valuesCopy = [...values];

// console.log('values =', values);
// console.log('valuesCopy =', valuesCopy);

// valuesCopy[0] = 100;

// console.log('values =', values);
// console.log('valuesCopy =', valuesCopy);

/*
TODO: Створення копії масиву зі складними типами даних
*/
// const users = [
//   {
//     firstName: 'Tillie',
//     lastName: 'McGee',
//   },
//   {
//     firstName: 'Mathilda',
//     lastName: 'Perkins',
//   },
//   {
//     firstName: 'Nathan',
//     lastName: 'Pratt',
//   },
// ];
// const usersCopy = structuredClone(users);

// usersCopy.push({ firstName: 'Oleksii', lastName: 'Repin' });
// usersCopy[0].firstName = 'Rosetta';

// console.table(users);
// console.table(usersCopy);

/*
TODO: Поєднуємо декілька масивів в один через spread
*/
// const lastWeekTemps = [1, 2, 3, 4, 5, 6, 7];
// const currentTemps = [8, 9, 10, 11, 12, 13, 14];
// const nextWeekTemps = [15, 16, 17, 18, 19, 20, 21];

// const allTemps = [100, ...lastWeekTemps, 200, ...currentTemps, 300, ...nextWeekTemps, 400];

// console.log('allTemps =', allTemps);

/*
TODO: Пошук найменшої або найбільшої температури (числа)
*/
// const temps = [18, 14, 12, 21, 17, 29, 24];

// const minTemp = Math.min(...temps);
// const maxTemp = Math.max(...temps);

// console.log('temps =', temps);
// console.log('minTemp =', minTemp);
// console.log('maxTemp =', maxTemp);

/*
TODO: Створення копії об'єкта
*/
// const obj = { x: 1, y: 2 };
// const objCopy = {
//   ...obj,
// };

// console.log('obj =', obj);
// console.log('objCopy =', objCopy);

/*
TODO: Поєднуємо декілько обʼєктів в один через spread
*/
// const objA = { a: 1, b: 2 };
// const objB = { a: 0, c: 3 };
// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log('objA =', objA);
// console.log('objB =', objB);
// console.log('objC =', objC);

// TODO: Напишіть функцію sum, яка складає довільну кількість аргументів
// const sum = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 40, 60));
// console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
