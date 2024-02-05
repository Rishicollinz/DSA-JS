let people = [3,5,3,4], limit = 5;

people.sort((a,b)=>(b-a));
// console.log(people);
let curr,currlast;
let boatCount=0;
for(let i=0;i<people.length;i++){
    curr=people[i];
    currlast=people[people.length-1];
    if(curr<=limit){
        if(curr+currlast<=limit){
            //remove first and last
            //rm first
            people[i]=null;
            //rm last
            people.pop();
            boatCount++;
        }else{
            //remove only first
            people[i]=null;
            boatCount++;
        }
    }

}
console.log(boatCount);

