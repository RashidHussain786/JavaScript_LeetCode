// Brute force approach
// Time Complexity: O(n^2)
// Space Complexity: O(1)
var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  };
  
  // using Sort 
  // Time Complexity: O(nlog n)
 // Space Complexity: O(1)
  var containsDuplicateUsingSort =function(nums){
   nums.sort();
   for(let i=1;i<nums.length;i++){
    if(nums[i]==nums[i-1]) return true;
    return false;
   }
  }

  // using Set, it stores only unique values 
  // Time Complexity: O(n)
 // Space Complexity: O(n)
 var containsDuplicateUsingSet =function(nums){
    const seen =new Set();
    for(let i=1;i<nums.length;i++){
     if(seen.has(nums[i])){
        return true;
     }else{
        seen.add(nums[i]);
     }
    }
    return false;
   }

  // Example usage:
  const nums = [1, 2, 3, 1];
  console.log(containsDuplicate(nums)); // Output: true
  
  const nums2 = [1, 2, 3, 4];
  console.log(containsDuplicateUsingSort(nums2)); // Output: false

  const nums3 = [1, 2, 3, 4,5,7,8,8];
  console.log(containsDuplicateUsingSet(nums3)); // Output: true
  