const randomContainer=document.getElementById('randomContainer');
// id필요없으면 빼기
function Maker(tagName,parent,setAttriName,setAttriValue,text){
  const Element=document.createElement(tagName);
  parent.appendChild(Element);
  Element.setAttribute(setAttriName,setAttriValue);
  Element.textContent=text;
}
randomContainer.style.backgroundImage='../image.png'
// 1. 랜덤 사진
let img=Maker('img',randomContainer,'id','img1')
//let img1 =Maker('img',randomContainer,'id','img2')
let num = Math.floor((Math.random() * 1008)) + 1
img1.style.width="200px";
img1.style.height="200px";
img1.style.marginLeft="40%";
// img1.style.border="1px solid black"

const xhr = new XMLHttpRequest();
const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;
xhr.open('GET', _URL);
xhr.send();
xhr.addEventListener('load', function() {
  // console.log(xhr.response);
  const _PokeData = JSON.parse(xhr.response);
  console.log(_PokeData);
  img1.src=_PokeData.sprites.front_default;
  //img2.src=_PokeData.sprites.back_default;
});
// 2. 양옆 버튼 만들기
let beforebutton=Maker('button',randomContainer,'id','before',"←")
let nextbutton=Maker('button',randomContainer,'id','next',"→")
const domElements={
  before:document.getElementById('before'),
  next:document.getElementById('next'),
  img:document.getElementById('img1'),
  //img2 : document.getElementById('img2')
}
before.style.width="30px";
before.style.height="30px";
before.style.position="absolute";
before.style.left="45%";
before.style.top="210px";

next.style.width="30px";
next.style.height="30px";
next.style.position="absolute";
next.style.left="48%";
next.style.top="210px";
//back_default
domElements.img.addEventListener('mouseenter', function(){
  document.getElementById('img1').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${num}.png`;
  onerror='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png';
/*   if(_PokeData.sprites.back_default ===undefined){
    document.getElementById('img1').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
  } */
})
domElements.img.addEventListener('mouseleave', function(){
  document.getElementById('img1').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
})
// 이전버튼 누르면 이전사진으로 이동
domElements.before.addEventListener('click',function(){
  document.getElementById('img1').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
  num--;
})
// 다음버튼 누르면 다음사진으로 이동
domElements.next.addEventListener('click',function(){
  document.getElementById('img1').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
  num++;
})
// console.dir(root);

// 3. 검색창 만들기
/* name에 포켓몬 이름이 있다,input 만들기 */
let input=Maker('input',randomContainer,'id','serch');

