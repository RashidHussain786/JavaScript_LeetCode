var trapByBruteForce = function(height) {
    let totalWater = 0;
    const n = height.length;

    for (let i = 0; i < n - 1; i++) {
        let leftMax = 0;
        let rightMax = 0;

        for (let j = i; j >= 0; j--) {
            leftMax = Math.max(leftMax, height[j]);
        }

        for (let j = i; j < n; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }

        totalWater += Math.min(leftMax, rightMax) - height[i];
    }

    return totalWater;
};


var trap = function(height) {
    let totalWater=0;
    let left_pointer=0;
    let right_pointer=height.length-1;
    let leftMax=0;
    let rightMax=0;
    
    while(left_pointer<right_pointer){
        if(height[left_pointer]<height[right_pointer]){
            if(height[left_pointer]>leftMax){
                leftMax=height[left_pointer];
            }else{
                totalWater+=leftMax-height[left_pointer];
            }
            left_pointer++;
        }else{
            if(height[right_pointer]>rightMax){
                rightMax=height[right_pointer];
            }else{
                totalWater+=rightMax-height[right_pointer];
            }
            right_pointer--;
        }
    }
    return totalWater;
};

//Example Usages:

const height=[0,1,0,2,1,0,1,3,2,1,2,1]

console.log(trapByBruteForce(height));
console.log(trap(height));