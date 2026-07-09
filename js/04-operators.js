/*
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

//~ 6 хибних значень: false, NaN, null, undefined, 0, ''.

/*
 * --------------------------------
 */

// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(''));

// console.log(Boolean(3.14));
// console.log(Boolean(-10));
// console.log(Boolean('hello'));
// console.log(Boolean('false'));

/*
 * Оператор &&
 */

// // true && true
// console.log('Hello' && 100);

// // false && true
// console.log(0 && 100);

// const score = 95;

// if (score >= 80 && score < 90) {
//   console.log('Good!');
// }

/*
 * Оператор ||
 */

// // true || false
// console.log('Hello' || 0);

// // false || false
// console.log('' || 0);

// const firstName = prompt('Введіть імʼя') || 'Anonym';

// console.log(firstName);

/*
 * Оператор !
 */

// console.log(!false);
// console.log(!true);
// console.log(!'');
// console.log(!'Oleksii');
