/*
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

// const numbers = [1, 9, 6, 2, 3, 23, 34];
// const sortedNumbers = numbers.toSorted();

// console.log('numbers:', numbers);
// console.log('sortedNumbers:', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X'];
// const sortedLetters = letters.toSorted();

// console.log('letters:', letters);
// console.log('sortedLetters:', sortedLetters);

/*
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */
// const numbers = [1, 2, 6, 22, 3, 9, 10, 34];
// const sortedNumbers = numbers.toSorted((prevEl, nextEl) => {
//   return nextEl - prevEl;
// });

// console.log('numbers:', numbers);
// console.log('sortedNumbers:', sortedNumbers);

// const letters = ['b', 'd', 'a', 'c', 'X', 'B', 'Y', 'A'];
// const sortedLetters = letters.toSorted((prevEl, nextEl) => {
//   return nextEl.localeCompare(prevEl);
// });

// console.log('letters: ', letters);
// console.log('sortedLetters: ', sortedLetters);

// console.log('a'.localeCompare('b'));
// console.log('b'.localeCompare('a'));
// console.log('a'.localeCompare('a'));
// console.log('a'.localeCompare('B'));

/*
 * Сортування масиву об'єктів
 */
// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//   { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//   { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
// ];

// console.table(players);

// TODO: За ігровим часом
// const sortedByBestPlayers = players.toSorted((prevEl, nextEl) => {
//   return nextEl.timePlayed - prevEl.timePlayed;
// });

// console.table(sortedByBestPlayers);

// TODO: По імені
// const sortedByName = players.toSorted((prevEl, nextEl) => {
//   return nextEl.name.localeCompare(prevEl.name);
// });

// console.table(sortedByName);
