export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn
}){

    function play(){
        buttonPlay.close()
        buttonPause.open()
        buttonSet.colse()
        buttonStop.open()
    }

    function pause(){
        buttonPause.colse()
        buttonPlay.open()
    }

    function reset(){
        buttonPlay.open()
        buttonPause.colse()
        buttonSet.open()
        buttonStop.colse()
    }

    function getMinutes(){
        let newMinutes = prompt('Quantos minutos')
        if(!newMinutes){
            return false
        }
        return newMinutes
    }

    function soundOff(){
        buttonSoundOn.open()
        buttonSoundOff.colse()
    }

    function soundOn(){
        buttonSoundOn.colse()
        buttonSoundOff.open()
    }

    return{
        reset,
        play, 
        pause, 
        getMinutes,
        soundOff,
        soundOn
    }
}