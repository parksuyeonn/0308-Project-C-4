
let array = [];
let newArrLength=0;

do{
for(let i=0;i<6;i++){
  let a= Math.floor(Math.random()*6+1);
  array[i] = a;
 }
 
 //console.log(array)
const set = new Set(array);
const newArr=[...set]; //...연산은 객체를 벗겨줌.
array = newArr;
newArrLength=newArr.length;
}
while(newArrLength<6)




