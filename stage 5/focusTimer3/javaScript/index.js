import {minutesDisplay, secondsDisplay, buttonPlay, buttonStop, buttonPlus, buttonMinus, buttonFlorets, buttonRain, buttonCoffeShop, buttonFirePlace, buttonPause, buttonLightMode, buttonDarkMode} from "./elements.js"
import TimerControls from "./controlsTImer.js"
import CardsControl from "./cardsControl.js"
import ColorMode from "./colorMode.js" 

const timerControls = TimerControls({minutesDisplay, secondsDisplay})
const cardsControl = CardsControl({buttonFlorets,buttonRain,buttonCoffeShop,buttonFirePlace})
const colorMode = ColorMode()


buttonLightMode.lightMode.addEventListener("click", ()=>{
    buttonLightMode.close()
    buttonDarkMode.open()
    colorMode.darkMode()
})

buttonDarkMode.darkMode.addEventListener("click", ()=>{
    buttonDarkMode.close()
    buttonLightMode.open()
    colorMode.ligthMode()
})

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

buttonFlorets.florest.addEventListener('click',()=>{
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