var evalRPN = function(tokens) {
    const stack=[];
    for(let token of tokens){
        if(isOperator(token)){
            const operand2=stack.pop();
            const operand1=stack.pop();
            const result =performOperation(token ,operand1,operand2);
            stack.push(result);
        }else{
            stack.push(Number(token));
        }
    }
    return stack.pop();
};
const isOperator=function(token){
    return token === '+' || token === '-' || token === '*' || token === '/';
};

const performOperation= function(operator ,operand1,operand2){
switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return Math.trunc(operand1 / operand2);
  }
}

//Example Usages:

const tokens=["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

console.log(evalRPN(tokens)); //output 22

// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22