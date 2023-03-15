const randomContainer = document.getElementById('randomContainer');

function Maker(tagName, parent, setAttriName, setAttriValue, text) {
  const Element = document.createElement(tagName);
  parent.appendChild(Element);
  Element.setAttribute(setAttriName, setAttriValue);
  Element.textContent = text;
}

let img = Maker('img', randomContainer, 'id', 'img1')

let num = Math.floor((Math.random() * 1260)) + 1
//let num = 953
const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;

const xhr = new XMLHttpRequest();
let beforebutton = Maker('button', randomContainer, 'id', 'before', "←")
let nextbutton = Maker('button', randomContainer, 'id', 'next', "→")

randomContainer.children[1].addEventListener('click', function () {
  num--;
  const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;
  xhr.open('GET', _URL);
  xhr.send();
  xhr.addEventListener('load', function () {
    const _PokeData = JSON.parse(xhr.response);
    img1.src = _PokeData.sprites.front_default;
  })
})
randomContainer.children[2].addEventListener('click', function () {
  num++;
  const _URL = `https://pokeapi.co/api/v2/pokemon/${num}`;
  xhr.open('GET', _URL);
  xhr.send();
  xhr.addEventListener('load', function () {
    const _PokeData = JSON.parse(xhr.response);
    img1.src = _PokeData.sprites.front_default;
  })

})

console.dir(randomContainer)
xhr.open('GET', _URL);
xhr.send();
xhr.addEventListener('load', function () {
  console.log(xhr.response);
  const _PokeData = JSON.parse(xhr.response);
  img1.src = _PokeData.sprites.front_default;

  randomContainer.addEventListener('mouseover', function () {
    if (_PokeData.sprites.back_default == null) {
      img1.src = _PokeData.sprites.front_default

    } else {
      img1.src = _PokeData.sprites.back_default

    }
  })
  randomContainer.addEventListener('mouseout', function () {
    img1.src = _PokeData.sprites.front_default

  })

  //back_default

  console.dir(_PokeData)


});


console.dir(root);