/*Задание 1.
Дан массив. Нужно вывести в консоль количество чётных и нечётных 
элементов в массиве.*/

const myArr = [0, 2, 3, 4, 5, null]

function oddEvenNum() {
const numberArray = myArr.filter(elem => typeof  elem === 'number' && !isNaN(elem))

//const otherElements = arr.filter(elem => typeof  elem !== 'number') // Это не обязательно, просто добавил для наглядности что сида попадают прочие элементы и символы

const odd = numberArray.filter(elem => elem % 2 !== 0)
const even = numberArray.filter(elem => elem % 2 === 0)
const zeroElements = numberArray.filter(elem => elem === 0) 
  
 console.log(zeroElements.length +' нулевых элементов')
console.log(odd.length +' нечётных элемента(ов)')
console.log(even.length +' чётных элемента(ов)')
}
  oddEvenNum(myArr)

