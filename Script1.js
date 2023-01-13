/*Задание 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных 
элементов в массиве.*/

const myArr = [2, 3, 4, 5, null]

function oddEvenNum() {
  const odd = myArr.filter(elem => elem % 2 !== 0)
  const even = myArr.filter(elem => elem % 2 === 0)
  const simbol = myArr.filter(elem => elem === null)
  
  console.log(odd.length +' нечётных элемента(ов)')
  console.log(even.length +' чётных элемента(ов)')
  console.log(simbol.length +' нулевой элемент')
}
  oddEvenNum(myArr)

