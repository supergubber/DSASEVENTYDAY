const countVowels = (str) => {
  const TofrmatedString = str.toLowerCase()
  let ans = 0
  for (let i = 0; i < TofrmatedString.length; i++) {
    if (
      TofrmatedString[i] === 'a' ||
      TofrmatedString[i] === 'i' ||
      TofrmatedString[i] === 'e' ||
      TofrmatedString[i] === 'o' ||
      TofrmatedString[i] === 'u'
    ) {
      ans++
    }
  }
  return ans
}

module.exports = countVowels
