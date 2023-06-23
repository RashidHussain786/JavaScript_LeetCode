var generateParenthesis = function(n) {
    const result =[]

    const backtrack=function(leftCount,rightCount,current){
        if (leftCount === n && rightCount === n) {
            result.push(current);
            return;
        }
        if(leftCount<n){
            backtrack(leftCount+1,rightCount,current+'(');
        }
        if(leftCount>rightCount){
           backtrack(leftCount,rightCount+1,current+')');
        }
    };
    backtrack(0,0,"");
    return result;
};

// Example Usages:
const n =3
console.log(generateParenthesis(n))