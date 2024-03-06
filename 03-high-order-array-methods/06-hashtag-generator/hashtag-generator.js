function generateHashing(str) {
  if (str.trim() === '') {
    return false
  }
  const words = str.trim().split(/\s+/)

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  const hashtag = '#' + capitalizedWords.join('')
  return hashtag.length > 140 ? false : hashtag
}

module.exports = generateHashing
