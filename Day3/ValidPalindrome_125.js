// Time Complexity O(n)
var isPalindromeByBruteForce = function(s) {
    const modified = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = modified.length;
  
    for (let i = 0; i < length / 2; i++) {
      if (modified[i] !== modified[length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  };
// two pointers approach is more efficient because it avoids unnecessary comparisons by starting from both ends and converging towards the middle.
//Time Compexity O(n)
  var isPalindrome = function(s) {
    const modified = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = modified.length;
   
    let left_pointer=0;
    let right_pointer=length-1;
    while(left_pointer<right_pointer){
        if(modified[left_pointer] !== modified[right_pointer]){
            return false;
        }
        left_pointer++;
        right_pointer--;
    }
    return true;
};

//Example Usages:

const s="A man, a plan, a canal: Panama";
const p="race a car";

console.log(isPalindromeByBruteForce(s));
console.log(isPalindromeByBruteForce(p));
console.log(isPalindrome(s));
console.log(isPalindrome(p));