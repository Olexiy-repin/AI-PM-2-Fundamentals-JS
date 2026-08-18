/*
 * Додавання прослуховувача подій на кожен елемент
 */

//TODO: Отримай колір квадратика по якому було здійснено клік
// const refs = {
//   boxes: document.querySelectorAll('.js-box'),
// };

// console.log(refs.boxes);

// refs.boxes[0].addEventListener('click', () => {});
// refs.boxes[1].addEventListener('click', () => {});
// refs.boxes[2].addEventListener('click', () => {});

// refs.boxes.forEach(box => {
//   box.addEventListener('click', event => {
//     console.log(event.target.dataset.color);
//   });
// });

/*
 * Дегегування подій
 */

//TODO: Отримай колір квадратика по якому було здійснено клік
const refs = {
  boxContainer: document.querySelector('.js-container'),
};

refs.boxContainer.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    return;
  }

  console.log(event.target.dataset.color);
});
