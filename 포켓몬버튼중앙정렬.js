/* <div id="root">
  <div id="randomContainer">
   */
  
  // 양옆 버튼 만들기 randomContainer안에 *12시까지
  
  const randomContainer=document.getElementById('randomContainer');
  randomContainer.style.width="100vw"
  randomContainer.style.height="100vh"

  // id필요없으면 빼기
  function Maker(tagName,parent,setAttriName,setAttriValue,text){
    const Element=document.createElement(tagName);
    parent.appendChild(Element);
    Element.setAttribute(setAttriName,setAttriValue);
    Element.textContent=text;
  }
  // 1. 랜덤 사진

  let img=Maker('img',randomContainer,'id','img1');
  let num = Math.floor((Math.random() * 1260)) + 1
  img1.style.width="200px";
  img1.style.height="200px";
  img1.style.marginLeft="40%";
  const xhr = new XMLHttpRequest();
  const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;
  xhr.open('GET', _URL);
  xhr.send();
  xhr.addEventListener('load', function() {
    console.log(xhr.response); 
    const _PokeData = JSON.parse(xhr.response); 
    console.log(_PokeData);
    img1.src=_PokeData.sprites.front_default; 
  });
  
  
  // 2. 양옆 버튼 만들기
  let beforebutton=Maker('button',randomContainer,'id','before',"←")
  let nextbutton=Maker('button',randomContainer,'id','next',"→")
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
  

  
  const domElements={
    before:document.getElementById('before'),
    next:document.getElementById('next')
  }
  // 이전버튼 누르면 이전사진으로 이동
 
  domElements.before.addEventListener('click',function(){
    document.getElementById('img1').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
    /* const beforeimg=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num-1}.png`; */
    /* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png */
// num= num-1
num--
  })
  ;
  
  // 다음버튼 누르면 다음사진으로 이동
  domElements.next.addEventListener('click',function(){
    document.getElementById('img1').src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`;
    num++
  })