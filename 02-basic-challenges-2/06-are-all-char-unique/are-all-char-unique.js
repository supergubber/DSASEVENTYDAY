// function areAllCharacterUnique(str) {
//   const charCount = {}
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]
//     //   console.log(char)
//     if (charCount[char]) {
//       return false
//     }

//     charCount[char] = true
//     // console.log(charCount)
//     // console.log(charCount[char])
//   }
// }

function areAllCharacterUnique(str) {
  const charset = new Set()
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (charset.has(char)) {
      return false
    }
    charset.add(char)
  }
  return true
}
module.exports = areAllCharacterUnique
