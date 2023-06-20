// this will not pass all the test cases

var topKFrequencyByBruteForce = function(nums,k){
    nums.sort();
    const numsCopy=[];
    for(let i=0;i<nums.length;i++){
       if(nums[i]!=nums[i+1]){
        numsCopy.push(nums[i]);
       }
    }
    numsCopy.push(nums.length-1);
    const result =[];
    for(let i=0;i<k;i++){
       result.push(numsCopy[i]);
    }
    return result;
}

// Time Complexity O(n log k)
// space Complexity O(n)
var topKFrequent = function(nums, k) {
    const freqInMap = new Map();
    for(let num of nums){
        if(freqInMap.has(num)){
            freqInMap.set(num,freqInMap.get(num)+1);
        }else{
            freqInMap.set(num,1);
        }
    }
    const result =[];
   const sortedKeys = Array.from(freqInMap.keys()).sort(
     (a, b) => freqInMap.get(b) - freqInMap.get(a)
   );
   for (let i = 0; i < k; i++) {
     result.push(sortedKeys[i]);
   }
   return result;
 };

 //Example Usage:

 const nums = [1,1,1,2,2,3];
 const k = 2;
 console.log(topKFrequent(nums,k));
 console.log(topKFrequencyByBruteForce(nums,k));