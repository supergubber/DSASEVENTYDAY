const countOccurrence = require('./count-occurrence')

test('Count Occurrences of Character', () => {
  expect(countOccurrence('hello', 'l')).toBe(2)
  expect(countOccurrence('programming', 'm')).toBe(2)
  expect(countOccurrence('banana', 'a')).toBe(3)
})
