const fizzBuzz = require('./fizzbuzz')

test('FizzBuzz', () => {
  expect(fizzBuzz(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ])
})
