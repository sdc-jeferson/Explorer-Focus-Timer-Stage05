
import Timer from './timer.js'
import Controls from './controls.js'
import Sound from './sounds.js'

  import {
    btnPlay,
    btnStop,
    btnSet,
    btnPause,
    btnSoundOn,
    btnSoundOff,
    minutesDisplay,
    secondsDisplay
} from './elements.js'

let minutes = Number(minutesDisplay.textContent)
let timerTimerOut;

const sound = Sound() 

const controls = Controls({  
    btnPause,
    btnPlay,
    btnSet,
    btnStop
})


const timer = Timer({ 
    minutesDisplay,
    secondsDisplay,
    timerTimerOut,
    minutes,
    resetControls: controls.reset
})

btnPlay.addEventListener('click', () => {
    controls.play()
    timer.countdown();
    sound.pressButton()
})

btnPause.addEventListener('click', () => {
    controls.pause();
    timer.hold()
    sound.pressButton()
})

btnStop.addEventListener('click', () => {
    controls.reset()    
    timer.reset()
    sound.pressButton()
})

btnSoundOn.addEventListener('click', () => {
    btnSoundOn.classList.add('hide');
    btnSoundOff.classList.remove('hide');
    sound.bgAudio.pause()
})

btnSoundOff.addEventListener('click', () => {
    btnSoundOff.classList.add('hide');
    btnSoundOn.classList.remove('hide');
    sound.bgAudio.play()
})

btnSet.addEventListener('click', () => {
    
    let newMinutes = controls.getMinutes()

    if(newMinutes < 0 || !newMinutes){
        timer.reset()      
        return 
    }


    timer.updateDisplay(newMinutes,0)
    
})
