var maxAreaByBruteForce =function(height){
    let maxarea=0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            let currentHeight=Math.min(height[i],height[j]);
            let currentWeidth=j-i;
            let currentArea=currentHeight*currentWeidth;

            maxarea=Math.max(maxarea,currentArea);
        }
    }
    return maxarea;
}

var maxArea = function(height) {
    let maxarea=0;
    let left_pointer=0;
    let right_pointer=height.length-1;
    while(left_pointer<right_pointer){
        let currentHeight=Math.min(height[left_pointer], height[right_pointer]);
        let currentWidth=right_pointer-left_pointer;
        let currentArea=currentHeight*currentWidth;

        maxarea= Math.max(maxarea,currentArea);

        if(height[left_pointer]< height[right_pointer]){
            left_pointer++;
        }else{
            right_pointer--;
        }
    }
    return maxarea;

};

//Example Usages:

const height=[1,8,6,2,5,4,8,3,7]

console.log(maxAreaByBruteForce(height));
console.log(maxArea(height));