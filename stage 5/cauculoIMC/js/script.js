import {Modal} from'./modal.js'
import { AlertError } from './alert-error.js'
import {calculateIMC, notANumber} from './utils.js'

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event){
  event.preventDefault()
  const weight = inputWeight.value
  const heigth = inputHeight.value
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(heigth)
  
  if(weightOrHeightIsNotANumber){
    AlertError.open()
    return
  }

  AlertError.close()
  const result = calculateIMC(weight, heigth)
  displayResoltMessage(result)
}

function displayResoltMessage(result){
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}
