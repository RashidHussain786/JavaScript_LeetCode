var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // pair: [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
       const t = temperatures[i];

        while (stack.length && t > stack[stack.length - 1][0]) {
         const [stackT, stackInd] = stack.pop();
         result[stackInd] = i - stackInd;
        }

     stack.push([t, i]);
    }

  return result;
};

//Example Usages:

const temperatures=[73,74,75,71,69,72,76,73]

console.log(dailyTemperatures(temperatures));