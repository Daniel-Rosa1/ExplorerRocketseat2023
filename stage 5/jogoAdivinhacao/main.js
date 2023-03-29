//variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const wrapper = document.querySelector(".wrapper")
let randomNumber = Math.round(Math.random()*10) 
let xAttenpts = 1

//eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", (e) =>{
  if(e.key == "Enter" && screen1.classList.contains("hide")){
    handleResetClick()
  }
})

//função callback 
const toggleScreen = () =>{
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleTryClick(event){
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value =="" || Number(inputNumber.value)<0 || Number(inputNumber.value)>10){
    wrapper.classList.remove("hide")
    inputNumber.value =""
    return
  }else{
    wrapper.classList.add("hide")
    if(Number(inputNumber.value) == randomNumber){
      toggleScreen()
      screen2.querySelector("h2").innerText = `Você acertou em ${xAttenpts} tentativas!`
    }
    inputNumber.value =""
    xAttenpts++
  }

}

function handleResetClick(){
  toggleScreen()
  xAttenpts = 1
  randomNumber = Math.round(Math.random()*10)
}