import {minutesDisplay, secondsDisplay, buttonPlay, buttonStop, buttonPlus, buttonMinus, buttonFlorets, buttonRain, buttonCoffeShop, buttonFirePlace, buttonPause} from "./elements.js"
import TimerControls from "./controlsTImer.js"
import CardsControl from "./cardsControl.js" 

const timerControls = TimerControls({minutesDisplay, secondsDisplay})
const cardsControl = CardsControl({buttonFlorets,buttonRain,buttonCoffeShop,buttonFirePlace})

buttonPlay.play.addEventListener('click',()=>{
    timerControls.play()
    buttonPlay.hideOrNot()
    buttonPause.hideOrNot()
})

buttonPause.pause.addEventListener("click", ()=>{
    timerControls.pause()
    buttonPlay.hideOrNot()
    buttonPause.hideOrNot()
})

buttonStop.addEventListener('click',()=>{
    timerControls.resetButtons()
})


buttonPlus.addEventListener('click',()=>{
   timerControls.addMinutes()
})

buttonMinus.addEventListener('click',()=>{
    timerControls.lessMinutes()
})

/* sounds */

buttonFlorets.florets.addEventListener('click',()=>{
    cardsControl.florest()
})

buttonRain.rain.addEventListener('click',()=>{
    cardsControl.rain()
})

buttonCoffeShop.coffeShop.addEventListener('click',()=>{
    cardsControl.coffeShop()
})

buttonFirePlace.firePlace.addEventListener('click',()=>{
    cardsControl.firePlace()
})