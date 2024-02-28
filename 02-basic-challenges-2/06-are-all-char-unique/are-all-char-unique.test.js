const areAllCharacterUnique = require('./are-all-char-unique')

test('Unique Cahracters in String', () => {
  expect(areAllCharacterUnique('abcdefg')).toBe(true)
  expect(areAllCharacterUnique('abcdefgA')).toBe(true)
  expect(areAllCharacterUnique('programming')).toBe(false)
  expect(areAllCharacterUnique('programming')).toBe(false)
  expect(areAllCharacterUnique('')).toBe(true)
})
