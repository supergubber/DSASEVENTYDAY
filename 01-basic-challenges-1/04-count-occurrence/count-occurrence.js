// function countOccurrence(str, char) {
//   let ans = 0
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       ans++
//     }
//   }
//   return ans
// }

const countOccurrence = (str, char) => {
  return str.split(char).length - 1
}
module.exports = countOccurrence
