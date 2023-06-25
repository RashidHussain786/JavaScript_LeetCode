// Brtue Force 
var minEatingSpeedByBruteForce = function(piles, h) {
    let maxPiles = Math.max(...piles);
    let minSpeed = Infinity;
  
    for (let speed = 1; speed <= maxPiles; speed++) {
      let totalHours = 0;
      for (let pile of piles) {
        totalHours += Math.ceil(pile / speed);
      }
      if (totalHours <= h) {
        minSpeed = Math.min(minSpeed, speed);
      }
    }
  
    return minSpeed;
  };

  
var minEatingSpeed = function(piles, h) {
    let [left,right]=[1, Math.max(...piles)];
    while(left<right){
        let mid=(left+right)>>1;
        const hourSpent = getHourSpent(piles,mid);
        if(hourSpent<=h) right=mid;
        if(hourSpent>h) left=mid+1
    }
    return right;
 };
 var getHourSpent=(piles,mid,hourSpent=0)=>{
    for(let pile of piles){
        hourSpent+=Math.ceil(pile/mid);
    }
    return hourSpent;
 }

 //Example Usages:

 const piles=[30,11,23,4,20]
 const h = 5
 const h1=6
 console.log(minEatingSpeed(piles,h));
 console.log(minEatingSpeedByBruteForce(piles,h1));