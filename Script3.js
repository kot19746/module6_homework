/*Задание 3.
Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.*/

function argumNum(num) {
  return function argumNum2(num2) {
  return num + num2;
  }
}
console.log(argumNum(3)(1))
