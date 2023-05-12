import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import { 
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay } from "./elements.js"

import Sound from "./sounds.js"


const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn
})
const timer = Timer({ 
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})
const sound = Sound()

Events({controls, timer,sound})