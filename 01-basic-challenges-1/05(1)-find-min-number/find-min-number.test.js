const findMaxNumber = require('./find-min-number')

test('Finding the maximum number in an array', () => {
  expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(1)
  expect(findMaxNumber([0, -1, -5, 2])).toBe(-5)
  expect(findMaxNumber([10, 10, 10, 10, 10])).toBe(10)
})
