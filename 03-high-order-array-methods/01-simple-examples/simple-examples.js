const numbers = [1, 2, 3, 4, 5]
// const doubleNumbers = numbers.map((num, index, arr) => {
//   //   console.log(index)
// //   console.log(arr)

//   return num * 2
// })
// console.log(numbers)
// console.log(doubleNumbers)

//map

// const doubleNumbers = numbers.map((num) => {
//   return num * 2
// })

// console.log(doubleNumbers)

//filter
// const evennumber = numbers.filter((num, index) => {
//   //  num % 2 === 0
//   return num > 3
// })
// console.log(evennumber)

// const sum = numbers.reduce((total, num) => {
//   //   console.log(total)
//   //   console.log(num)
//   //   console.log(total + num);
//   return total + num
// }, 0)
// console.log(sum)

//////////reducer/////////
// const sum = numbers.reduce((total, num) => {
//   return total + num
// }, 0)
// console.log(sum)

//////////forEach///////////
const num = numbers.forEach((num) => {
  console.log(num)
})
