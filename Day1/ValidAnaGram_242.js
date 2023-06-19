// Time Complexity O(n log n)
// Space Complexity O(1)
var isAnaGram = function (s,t){
    if(s.length!=t.length) return false;
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    return sortedS===sortedT;
}

//Using Map method
// Time COmplexityO(n)
//Space ComplexityO(n)

var isAnaGramUsingMap = function(s,t){
    if(s.length!=t.length) return false;

    const charCountInMap = new Map();

    for(let char of s){
        if(charCountInMap.has(char)){
            charCountInMap.set(char,charCountInMap.get(char)+1);
        }else{
            charCountInMap.set(char,1);
        }
    }

    for(let char of t){
      if(!charCountInMap.has(char)){
         return false;
        }
        charCountInMap.set(char,charCountInMap.get(char)-1);
        if (charCountInMap.get(char) === 0) {
            charCountInMap.delete(char);
          }
    }

    return charCountInMap.size===0;
}
// Example usage:
const s = "anagram";
const t = "nagaram";
console.log(isAnaGram(s, t)); // Output: true

const s2 = "rat";
const t2 = "car";
console.log(isAnaGramUsingMap(s2, t2)); // Output: false