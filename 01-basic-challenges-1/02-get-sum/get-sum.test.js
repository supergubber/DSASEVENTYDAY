const sum = require('./get-sum')

test('get two sum', () => {
  const num1 = 10
  const num2 = 20
  const result = sum(num1, num2)
  expect(result).toBe(30)
})
