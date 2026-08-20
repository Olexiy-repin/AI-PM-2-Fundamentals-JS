/*
 * Деструктуризація об'єкта
 */

/*
TODO: Напишіть деструктуруюче присвоєння, яке:
TODO: властивість firstName присвоє до змінної firstName.
TODO: властивість lastName присвоє до змінної lastName.
TODO: властивість age присвоє до змінної userAge.
TODO: властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
// };

// console.log('user =', user);

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName, lastName, age: userAge, isAdmin: isAdmin = false } = user;

// console.log('firstName =', firstName);
// console.log('lastName =', lastName);
// console.log('userAge =', userAge);
// console.log('isAdmin =', isAdmin);

/*
 * Глибока деструктуризація об'єкта
 */

//~ Без глибокої деструктуризації
// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log('user =', user);

// const { username } = user;
// const { html, css, js } = user.skills;

// console.log('username =', username);
// console.log('html =', html);
// console.log('css =', css);
// console.log('js =', js);

//~ З глибокою деструктуризацією
// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log('user =', user);

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// console.log('username =', username);
// console.log('html =', html);
// console.log('css =', css);
// console.log('js =', js);

/*
 * Деструктуризація масива
 */
// const usernames = ['Trevor', 'Howard', 'Marian', 'Christina'];

// console.log('usernames =', usernames);

// const [usernameTrevor, , usernameMarian] = usernames;

// console.log('usernameTrevor =', usernameTrevor);
// console.log('usernameMarian =', usernameMarian);

/*
TODO: Функція getUserCoordinates повертає масив з координатами користувача, деструктуризуйте цей масив.
*/
// const getUserCoordinates = () => {
//   const longitude = 50.426857;
//   const latitude = 30.56368;

//   return [longitude, latitude];
// };

// const [userLongitude, userLatitude] = getUserCoordinates();

// console.log('userLongitude =', userLongitude);
// console.log('userLatitude =', userLatitude);

//* Операція rest при деструктуризації
// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log('user:', user);

// const { firstName, lastName, ...otherProps } = user;

// console.log('firstName =', firstName);
// console.log('lastName =', lastName);
// console.log('otherProps =', otherProps);
