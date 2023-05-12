import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn} from "./elements.js"

export default function Events({controls, timer,sound}){

    buttonPlay.play.addEventListener('click', ()=>{
        controls.play()
        timer.countDown()
        sound.pressButton()
    })
    
    buttonPause.pause.addEventListener('click', ()=>{
        controls.pause()
        timer.hold()
        sound.pressButton()
    })
    
    buttonStop.stop.addEventListener('click', ()=>{
        controls.reset()
        timer.reset()
        sound.pressButton()
    })
    
    buttonSoundOn.soundOn.addEventListener('click', ()=>{
        controls.soundOn()
        sound.bgAudio.pause()
    })
    
    buttonSoundOff.soundOff.addEventListener('click', () =>{
        controls.soundOff()
        sound.bgAudio.play()
    })
    
    buttonSet.set.addEventListener('click', () =>{
        let newMinutes = controls.getMinutes()
    
        if(!newMinutes){
            timer.reset()
            return
        }
    
       
        timer.updateDisplay(newMinutes,0)
        timer.updateMinutes(newMinutes)
    })

}

