/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

/*
 * Object.create() та ланцюжки прототипів
 */

// const userMethods = {
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   isAdult() {
//     return this.age >= 18;
//   },
// };

// const user1 = Object.create(userMethods);

// user1.firstName = 'Lola';
// user1.lastName = 'Stewart';
// user1.age = 20;

// console.log(user1);

// console.log(user1.getFullName());
// console.log(user1.isAdult());

// const user2 = Object.create(userMethods);

// user2.firstName = 'Warren';
// user2.lastName = 'Watkins';
// user2.age = 15;

// console.log(user2);

// console.log(user2.getFullName());
// console.log(user2.isAdult());

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   propC: 'Property C',
// };

// const objB = Object.create(objC);

// objB.propB = 'Property B';

// const objA = Object.create(objB);

// objA.propA = 'Property A';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log('key =', key);
//   }
// }

// console.log(objA.hasOwnProperty('propA'));
// console.log(objA.hasOwnProperty('propB'));
// console.log(objA.hasOwnProperty('propC'));

// console.log({ firstName: 'Oleksii' });
