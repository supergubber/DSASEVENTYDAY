const generateHashing = require('./hashtag-generator')

test('Generating Hashtags', () => {
  expect(generateHashing('Hello there thanks for trying my Kata')).toBe(
    '#HelloThereThanksForTryingMyKata'
  )
  expect(generateHashing('    Hello     World')).toBe('#HelloWorld')
  expect(generateHashing('')).toBe(false)
  expect(
    generateHashing(
      'This is a very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long input that should result in a false because it exceeds the character limits of 140'
    )
  ).toBe(false)
})
