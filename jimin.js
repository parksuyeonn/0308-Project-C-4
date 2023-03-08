//const xhr = new XMLHttpRequest();  //XML 객체 생성.
//const _URL = `https://pokeapi.co/api/v2/pokemon/`;
//const maincontainer = document.getElementById('mainContainer');

let array = [];
let newArrLength=0;

do{
for(let i=0;i<6;i++){
  let a= Math.floor(Math.random()*6+1);
  array[i] = a;
 } 
const set = new Set(array);
const newArr=[...set]; //...연산은 객체를 벗겨줌.
array = newArr;
newArrLength=newArr.length;
}
while(newArrLength<6);
console.log(array)
const _URL0 = `https://pokeapi.co/api/v2/pokemon/${array[0]}`;
const _URL1 = `https://pokeapi.co/api/v2/pokemon/${array[1]}`;
const _URL2 = `https://pokeapi.co/api/v2/pokemon/${array[2]}`;
const _URL3 = `https://pokeapi.co/api/v2/pokemon/${array[3]}`;
const _URL4 = `https://pokeapi.co/api/v2/pokemon/${array[4]}`;
const _URL5 = `https://pokeapi.co/api/v2/pokemon/${array[5]}`;


    xhr.addEventListener('load', function() {
      xhr.open('GET', _URL0);  
      xhr.send();
      const _PokeData = JSON.parse(xhr.response); 
      console.log(_PokeData);
      //_PokeData.sprites.front_default
        //fetch(_URL).then((response)=> response.json()).then((data)=>{img.src=data.sprites.front_default})
      })
      console.log(_PokeData);


    
 
console.log(array);

