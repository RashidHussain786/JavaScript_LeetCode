var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longestSeq = 0;
    for(let num of nums){
        if(!numSet.has(num-1)){
            let currentNum = num;
            let currentLength=1;

            while(numSet.has(currentNum+1)){
            currentNum+=1;
            currentLength+=1;
            }
             longestSeq =Math.max(longestSeq, currentLength);
        }
    }
    return longestSeq;
};

//Example Usage:

const nums =[100,4,200,1,3,2]
const nums2=[0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums));
console.log(longestConsecutive(nums2));