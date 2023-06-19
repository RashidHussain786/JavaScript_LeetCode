// using Nasted for loop
// Time Complexity O(n^2)
// Space Complexity O(1)
var twoSumBruteForce=function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  }

// using Map
// Time Complexity O(n)
// Space Complexity O(n)
var twoSum = function(nums, target) {
    const numInMap = new Map();
    for(let i=0;i<nums.length;i++){
        const complement = target-nums[i];
        if(numInMap.has(complement)){
            return [numInMap.get(complement),i];
        }
         numInMap.set(nums[i],i);
    }
    return [];
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const target2=13;

console.log(twoSum(nums, target)); // Output: [0, 1]

console.log(twoSumBruteForce(nums, target2)); // Output: [0, 2]