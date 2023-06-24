var searchMatrix = function(matrix, target) {
    const [row,col]=[matrix.length,matrix[0].length]
    let [first,last]=[0,row*col-1]
    
    while(first<=last){
        let mid= (first+last)>>1
        let midValue=matrix[Math.floor(mid/col)][mid%col]

        if(target===midValue) return true;
        else if(midValue<target) first=mid+1;
        else last=mid-1;
    }
    return false;
};

//Example Usages:

const matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
const target = 3

console.log(searchMatrix(matrix,target))