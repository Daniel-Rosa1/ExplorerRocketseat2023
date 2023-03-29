const btnImg = document.querySelector("#btnImg")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const frases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Quem quer colher rosas tem de estar preparado para suportar os espinhos.',
  'A adversidade é um espelho que reflete o verdadeiro eu.',
  'O riso é a menor distância entre duas pessoas.',
  'Amizade e Amor são coisas que se unem num piscar de olhos.',
  'Se você se sente só é porque construiu muros ao invés de pontes.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
  'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.'
]


btnImg.addEventListener("click", handleClick)
btnReset.addEventListener("click", handleClick)


function handleClick(event){
  event.preventDefault()
  changeFrase()
  toggleScreen()
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function changeFrase(){
  const randomNumber = Math.round(Math.random()*10)
  screen2.querySelector("span").innerText = frases[randomNumber]
}
