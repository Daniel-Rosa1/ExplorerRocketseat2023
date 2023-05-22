import { buttonPause, buttonPlay } from "./elements.js"
export default function TimerControls({minutesDisplay, secondsDisplay}){
    let minutes = minutesDisplay.textContent
    let TimerTimeUot

    
     
    function updateDisplay (minutes, seconds){
        
        minutesDisplay.textContent = String(minutes).padStart(2,"0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
    }
    
    function addMinutes(){
        resetButtons()
        let newMinutes = minutes
        
        if (newMinutes >= 55){
            newMinutes = 60
            updateDisplay(newMinutes,0)
            minutes = newMinutes
            return
        }

        newMinutes = Number(minutes) + 5
        updateDisplay(newMinutes,0)
        minutes = newMinutes
    }

    function lessMinutes(){
        resetButtons()
        let newMinutes = minutes

        if( newMinutes <=0){
            newMinutes = 0
            updateDisplay(0,0)
            return
        }

        newMinutes = Number(minutes) -5
        updateDisplay(newMinutes,0)
        minutes = newMinutes
    }

    function play(){
        TimerTimeUot = setTimeout(function(){
            let seconds = secondsDisplay.textContent
            let minutes = minutesDisplay.textContent
            let isFinished = minutes ==0 && seconds == 0

            updateDisplay(minutes,0)
            
            if(isFinished){
            return
            }

            if(seconds <=0){
                seconds = 60
                minutes--
            }

            updateDisplay(minutes ,String(seconds-1))
            play()
        },1000)
    }

    function pause(){
        clearTimeout(TimerTimeUot)
    }

    function resetDisplay() {
        clearTimeout(TimerTimeUot)
        updateDisplay(minutes,0)
    }

    function resetButtons(){
        resetDisplay()
        buttonPlay.play.classList.remove('hide')
        buttonPause.pause.classList.add('hide')
    }

    return{
        updateDisplay,
        addMinutes,
        lessMinutes,
        play,
        pause,
        resetDisplay,
        resetButtons
    }
    
}