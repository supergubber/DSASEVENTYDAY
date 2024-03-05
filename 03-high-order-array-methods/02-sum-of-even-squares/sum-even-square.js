//
function sumOfEvenSquares(numbers) {
  const evenSquares = numbers
    .filter((num) => num % 2 === 0)
    .map((sum) => sum ** 2)
    .reduce((initial, add) => add + initial, 0)
  return evenSquares 
}
module.exports = sumOfEvenSquares
