/*
 * - Стек викликів
 * - Порядок виконання
 */

function fn1() {
  console.log('fn1');

  fn2();
}

function fn2() {
  console.log('fn2');

  fn3();
}

function fn3() {
  console.log('fn3');
}

fn1();
