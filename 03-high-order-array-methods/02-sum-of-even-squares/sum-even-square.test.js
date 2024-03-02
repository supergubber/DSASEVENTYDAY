const sumOfEvenSquares = require('./sum-even-square')
test('Sum of even squares', () => {
  expect(sumOfEvenSquares([1, 2, 3, 4, 5])).toBe(20)
  expect(sumOfEvenSquares([-1, 0, 1, 2, 3, 4])).toBe(20)
  expect(sumOfEvenSquares([])).toBe(0)
})
