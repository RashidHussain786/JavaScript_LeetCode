var search = function(nums, target) {
    let [left, right]=[0,nums.length-1]
    
    while(left<=right){
        let mid = left+ Math.floor((right-left)/2);
        let guessNumber=nums[mid];
        if(guessNumber==target) return mid;
        else if(guessNumber<target) left = mid+1;
        else right= mid-1;
    }
    return -1;
};

//Example Usages
const nums=[-1,0,3,5,9,12]
const target = 9

console.log(search(nums,target));
