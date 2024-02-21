function reverseString(str){
    return str.split('').reverse().join('');
}
// function reverseString(str) {
//   let ans = ''
//   let size = str.length - 1
//   for (let i = size; i >= 0; i--) {
//     ans += str[i]
//   }
//   return ans
// }

module.exports = reverseString
