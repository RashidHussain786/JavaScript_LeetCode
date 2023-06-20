var productExceptSelfByBruteForce = function (nums)  {
    const n = nums.length;
    const answer = new Array(n);
  
    for (let i = 0; i < n; i++) {
      let product = 1;
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          product *= nums[j];
        }
      }
      answer[i] = product;
    }
  
    return answer;
  };

  var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n);
    let prefixProduct=1;
    let postfixProduct=1;
    for(let i=0;i<n;i++){
        answer[i]=prefixProduct;
        prefixProduct*=nums[i];
    }
    for(let i=n-1;i>=0;i--){
        answer[i]*=postfixProduct;
        postfixProduct*=nums[i];
    }
    return answer;
 };
  
 // Example Usages:

 const nums = [1,2,3,4];
 const nums1=[-1,1,0,-3,3];

 console.log(productExceptSelfByBruteForce(nums));
 console.log(productExceptSelf(nums1));