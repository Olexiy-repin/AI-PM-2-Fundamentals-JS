/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - changeName(title);
TODO: - updateRating(newRating);
*/

const playlist = {
  name: 'My amazing playlist',
  rating: 4,
  tracks: ['track-1', 'track-2', 'track-3'],

  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },

  changeName: function (newName) {
    if (newName.length > 2) {
      this.name = newName;
    }
  },
};

console.log(playlist);

playlist.updateRating(5);
playlist.changeName('New playlist');

console.log(playlist);

// const updatePlaylistRating = function (playlistData, newRating) {
//   if (newRating >= 0 && newRating <= 5) {
//     playlistData.rating = newRating;
//   }
// };

// console.log(playlist);

// updatePlaylistRating(playlist, 5);

// console.log(playlist);
