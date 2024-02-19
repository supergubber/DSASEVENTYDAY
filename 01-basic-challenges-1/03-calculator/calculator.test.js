const calculator = require('./calculator')

test('calculator', () => {
  const num1 = 5
  const num2 = 7
  //Addition
  expect(calculator(num1, num2, '+')).toBe(12)
  //subtraction
  expect(calculator(num1, num2, '-')).toBe(-2)
  //multiplication
  expect(calculator(num1, num2, '*')).toBe(35)
  //division
  expect(calculator(num1, num2, '/')).toBeCloseTo(0.7143, 4)
})
