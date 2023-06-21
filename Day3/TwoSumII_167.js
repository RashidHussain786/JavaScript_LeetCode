var twoSum = function(numbers, target) {
    let left_pointer=0;
    let right_pointer=numbers.length-1;
    while(left_pointer<right_pointer){
       if(numbers[left_pointer]+numbers[right_pointer]==target){
           return [left_pointer+1, right_pointer+1];
       }
       if(numbers[left_pointer]+numbers[right_pointer]<target){
           left_pointer++;
       }else{
           right_pointer--;
       }
    }
    return [];
};

//Example Usages:

const numbers =[2,7,11,15]
const target =18
console.log(twoSum(numbers,target));