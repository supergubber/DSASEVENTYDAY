const findMissingLetter = require('./find-missing-letter')

test('Find Missing Letter', () => {
  expect(findMissingLetter(['a', 'b', 'c', 'e'])).toBe('d')
  expect(findMissingLetter(['X', 'Z'])).toBe('Y')
  expect(findMissingLetter(['F', 'G', 'H', 'J'])).toBe('I')
  expect(findMissingLetter(['o', 'p', 'q', 's', 't'])).toBe('r')
})
