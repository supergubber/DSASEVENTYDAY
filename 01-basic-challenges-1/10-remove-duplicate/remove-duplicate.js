// const removeDuplicate = (arr) => {
//   let uniqueArray = []

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArray.includes(arr[i])) {
//       uniqueArray.push(arr[i])
//     }
//   }
//   return uniqueArray
// }
const removeDuplicate = (arr) => {
  return Array.from(new Set(arr))
}

module.exports = removeDuplicate
