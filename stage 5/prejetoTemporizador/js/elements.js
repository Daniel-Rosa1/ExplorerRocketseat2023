const buttonPlay = {
    play: document.querySelector(".play"),
    open(){
        buttonPlay.play.classList.remove('hide')
    },
    close(){
        buttonPlay.play.classList.add('hide')
    }
} 

const buttonPause = {
   pause: document.querySelector(".pause"),
   open(){
    buttonPause.pause.classList.remove('hide')
   },
   colse(){
    buttonPause.pause.classList.add('hide')
   }
}

const buttonStop = {
   stop: document.querySelector(".stop"),
   open(){
    buttonStop.stop.classList.remove('hide')
   },
   colse(){
    buttonStop.stop.classList.add('hide')
   }
}

const buttonSet = {
   set: document.querySelector(".set"),
   open(){
    buttonSet.set.classList.remove('hide')
   },
   colse(){
    buttonSet.set.classList.add('hide')
   }
}

const buttonSoundOn = {
   soundOn: document.querySelector(".sound-on"),
   open(){
    buttonSoundOn.soundOn.classList.remove('hide')
   },
   colse(){
    buttonSoundOn.soundOn.classList.add('hide')
   }
}

const buttonSoundOff = {
   soundOff: document.querySelector(".sound-off"),
   open(){
    buttonSoundOff.soundOff.classList.remove('hide')
   },
   colse(){
    buttonSoundOff.soundOff.classList.add('hide')
   }
}

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

export{
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay
}