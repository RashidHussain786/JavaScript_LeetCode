var isValid = function(s) {
    const stack = [];
    const open="({[";
    const close=")}]";

    for(let i=0;i<s.length;i++){
       const char=s[i];
       if(open.includes(char)){
           stack.push(char);
       }else if(close.includes(char)){
           if(stack.length==0){
               return false;
           }
           const top = stack.pop();
           if(close.indexOf(char)!==open.indexOf(top)){
               return false;
           }
       }
    }

   return stack.length===0;
};

//Example Usages:

const s="()[]{}";
const s1="({[})";

console.log(isValid(s));
console.log(isValid(s1));