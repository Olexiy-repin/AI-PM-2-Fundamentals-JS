/*
TODO: Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
TODO: значення яких буде передано до параметра dimensions у вигляді рядка.
TODO: Значення гарантовано розділені пробілом.
*/

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
TODO: Напиши функцію logItems(items), яка отримує масив та використовує цикл,
TODO: який для кожного елемента масиву буде виводити в консоль повідомлення у
TODO: форматі <номер елемента> - <значення елемента>. Нумерація елементів
TODO: повинна починатися з 1.
TODO:
TODO: Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
TODO: індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
TODO: Напиши функцію printInfo(names, phones) яка виводить
TODO: у консоль ім'я та телефонний номер користувача. У параметри
TODO: names та phones будуть передані рядки імен та телефонних номерів,
TODO: розділені комами. Порядковий номер імен та телефонів у рядках
TODO: вказують на відповідність. Кількість імен та телефонів
TODO: гарантовано однакова.
*/

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
// printInfo('Marion,Eugenia,Dean,Jesus', '8577702524,9125002644,2028646420,9364154932');

/*
TODO: Напишіть функції для роботи з колекцією навчальних курсів courses:
TODO: addCourse(courseName) - додає курс в кінець колекції
TODO: removeCourse(courseName) - видаляє курс з колекції
TODO: updateCourse(oldName, newName) - змінює назву курса
*/
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// console.log(courses);

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Express']
// addCourse('CSS'); // 'Такий курс вже існує'
// console.log(courses);

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Express']

// updateCourse('HTML', 'HTML Fundamentals');
// console.log(courses); // ['HTML Fundamentals', 'CSS', 'JavaScript', 'NodeJS', 'Express']
