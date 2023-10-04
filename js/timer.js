
import Sounds from "./sounds.js"


export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimerOut,
    resetControls,
    minutes
}){   



    function reset(){
        updateDisplay(minutes, 0) //nesse reset mantem o minutos e zera a os segundos
        clearTimeout(timerTimerOut)
    }

     function hold(){
        clearTimeout(timerTimerOut)    
    }

    function updateDisplay(newMinutes, seconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');

    }


    function countdown(){

        timerTimerOut = setTimeout(function(){

            let seconds = Number(secondsDisplay.textContent) 
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
            
            updateDisplay(minutes,0) //ou updateDisplay(minutes).textContent = "00"

            if(isFinished){   
                resetControls()
                updateDisplay()   
                Sounds().timeEnd() // kitchenTimer em sounds
                return                       
            }
            
            if(seconds <= 0 ){
                seconds = 60

                --minutes
                // updateDisplay(String(minutes - 1), seconds)
            }

            updateDisplay(minutes, String(seconds - 1))
                      
            
        countdown(); // recusividade, quando uma função chama ela mesma. Vai fazer todo o setTimeout novamente que nesse caso é dimminuir os segundos em -1.

        },1000)
    }

   

   
    return {
        reset,
        hold,
        updateDisplay,
        countdown,
    }
}

