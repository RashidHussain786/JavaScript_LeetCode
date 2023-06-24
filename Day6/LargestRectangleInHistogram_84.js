
var largestRectangleAreaByBruteForce = function(heights) {
    let maxArea = 0;
  
    for (let i = 0; i < heights.length; i++) {
      let minHeight = heights[i];
  
      for (let j = i; j < heights.length; j++) {
        minHeight = Math.min(minHeight, heights[j]);
        const width = j - i + 1;
        const area = minHeight * width;
        maxArea = Math.max(maxArea, area);
      }
    }
  
    return maxArea;
  };


var largestRectangleArea = function(heights) {
    let maxArea=0;
    const stack=[]; //pair of [index , height]

    for(let i=0;i<heights.length;i++){
        let start=i;
        while(stack.length && stack[stack.length-1][1]>heights[i]){
            const [index, height]=stack.pop();
            maxArea=Math.max(maxArea,height*(i-index));
            start=index;
        }
        stack.push([start,heights[i]]);
    }

    while(stack.length){
        const [index,height]= stack.pop();
        maxArea= Math.max(maxArea, height*(heights.length-index));
    }
    return maxArea;
};

//Example Usages

const heights=[2,1,5,6,2,3]
console.log(largestRectangleAreaByBruteForce(heights));
console.log(largestRectangleArea(heights));