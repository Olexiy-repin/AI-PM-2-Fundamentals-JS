/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

const refs = {
  textField: document.querySelector('.js-user-name'),
  policyCheckbox: document.querySelector('.js-policy-checkbox'),
};

/*
TODO: Виводь в консоль все що користувач вводить в input
*/
// refs.textField.addEventListener('input', () => {
//   console.log(refs.textField.value);
// });

/*
TODO: Користувач вводить в input своє ім'я, після втрати
TODO: фокусу отримує alert з повідомленням-привітанням
 */
// refs.textField.addEventListener('blur', () => {
//   if (refs.textField.value.length >= 2) {
//     alert(`Welcome ${refs.textField.value}`);
//   }
// });

// refs.textField.addEventListener('change', () => {
//   if (refs.textField.value.length >= 2) {
//     alert(`Welcome ${refs.textField.value}`);
//   }
// });

/*
TODO: Після того, як користувач активує чекбокс, виводиться alert
*/
// refs.policyCheckbox.addEventListener('change', () => {
//   if (refs.policyCheckbox.checked) {
//     alert('All done!');
//   }
// });
