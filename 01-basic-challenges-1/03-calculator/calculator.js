// function calculator(num1, num2, operator) {
//   let ans = 0
//   switch (operator) {
//     case '+':
//       ans = num1 + num2
//       break
//     case '-':
//       ans = num1 - num2
//       break
//     case '*':
//       ans = num1 * num2
//       break
//     case '/':
//       ans = num1 / num2
//       break
//     default:
//       throw new Error('Invalid Operator')
//   }
//   return ans
// }

function calculator(num1,num2,operator){
    let ans;
    if(operator === "+"){
        ans = num1+num2
    }
    else if(operator === '-'){
        ans = num1-num2;
    }else if(operator === '/'){
        ans = num1/num2
    }else if(operator === '*'){
        ans = num1*num2;
    }
    return ans;
}

module.exports = calculator
