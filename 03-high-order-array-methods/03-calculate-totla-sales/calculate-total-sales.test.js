const calculateTotalSaleWithTax = require('./calculate-total-sales')

test('Calculating total sales amount with tax', () => {
  expect(
    calculateTotalSaleWithTax(
      [
        { name: 'Apple', price: 0.5, quantity: 10 },
        { name: 'Orange', price: 0.6, quantity: 15 },
        { name: 'banana', price: 0.3, quantity: 20 },
      ],
      8
    )
  ).toBe(21.6)
})
