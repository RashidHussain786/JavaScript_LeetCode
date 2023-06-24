//  we can also use map in place of for 
// cars.map((pos,index)=>{position:pos,timeToReach: (target-pos)/speed[index]})
// we can also use stack in place of maxTime and there logic

//Time Complexity O(n log n)
//Space Complexity O(n)

var carFleet = function(target, position, speed) {
   const cars=[]
   for(let i=0;i<position.length;i++){
       cars.push({
           position:position[i],
           timeToReach:(target-position[i])/speed[i],
       })
   }
   cars.sort((a,b)=>b.position - a.position) // dec order
   let fleets=0;
   let maxTime=0;
   for(let i=0;i<cars.length;i++){
       let car =cars[i];
       if(car.timeToReach>maxTime){
           fleets++;
           maxTime=car.timeToReach;
       }
   }
   return fleets;
};

//Example Usages
const target = 12
const position = [10,8,0,5,3]
const speed = [2,4,1,1,3]

console.log(carFleet(target,position,speed))