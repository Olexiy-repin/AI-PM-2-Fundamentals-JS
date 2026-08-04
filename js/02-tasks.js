// TODO: Що буде виведено в консоль
// const foo = function () {
//   console.log('this =', this);
// };

// foo(); // undefined

// TODO: Що буде виведено в консоль
// const book = {
//   title: 'React for beginners',

//   showThis: function () {
//     console.log('this =', this);
//   },

//   showTitle: function () {
//     console.log('book.title =', this.title);
//   },
// };

// book.showThis();

// const outerShowThis = book.showThis;

// outerShowThis();

// book.showTitle();

// const outerShowTitle = book.showTitle;

// outerShowTitle();

/*
TODO: Тут функція makeUser повертає об'єкт.
TODO: Яким буде результат при зверненні до властивості ref?
*/
// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user.ref.name); // Error

// TODO: Що буде виведено в консоль
// const makeUser = function () {
//   const newUser = {
//     name: 'Джон',

//     ref() {
//       return this;
//     },
//   };

//   return newUser;
// };

// const user = makeUser();

// console.log(user.ref().name); // 'Джон'

/*
TODO: Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
TODO: розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
TODO: кількістю з властивості stones.
 */
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(stoneData => stoneData.name.toLowerCase() === stoneName.toLowerCase());

//     if (!stone) {
//       return `${stoneName} не знайдено!`;
//     }

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Aconit')); // Aconit не знайдено!
