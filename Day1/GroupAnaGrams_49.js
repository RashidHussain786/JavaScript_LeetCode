// Brute Force
// Time Complexity  O(n^2 * k)
//space Compexity O(n)
var isAnaGram = function (s,t){
    if(s.length!=t.length) return false;
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    return sortedS===sortedT;
}

var groupAnagramsBruteForce= function (strs) {
    const result = [];
  
    for (let i = 0; i < strs.length; i++) {
      const anagramGroup = [strs[i]];
  
      for (let j = i + 1; j < strs.length; j++) {
        if (isAnaGram(strs[i], strs[j])) {
          anagramGroup.push(strs[j]);
          strs.splice(j, 1); // removing the string at that index
          j--;
        }
      }
  
      result.push(anagramGroup);
    }
  
    return result;
  }

// using Map
// Time Compexity O(n * k * log(k)), where n is the number of strings in the "strs" array and k is the maximum length of a string.
// Space Complexity O(n*k), where n is the number of strings in the "strs" array and k is the maximum length of a string.

var groupAnagrams = function(strs) {
    const anaGramsInMap = new Map();

    for(let str of strs){
        const sortedStr = str.split("").sort().join("");
        if(anaGramsInMap.has(sortedStr)){
         anaGramsInMap.get(sortedStr).push(str);
        }else{
            anaGramsInMap.set(sortedStr,[str]);
        }
    }
    return Array.from(anaGramsInMap.values());
};

// Example usage:

const strs2 = ["listen", "silent", "inlets", "linest", "top", "pot"];
console.log(groupAnagramsBruteForce(strs2));

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1));

const strs3 = ["hello", "world", "abc", "def"];
console.log(groupAnagrams(strs3));

