export default function Controls({
    btnPause,
    btnPlay,
    btnSet,
    btnStop

}){

    function play(){
        btnPlay.classList.add('hide');
        btnPause.classList.remove('hide');
        btnSet.classList.add('hide');
        btnStop.classList.remove('hide');
    }

    function pause(){
        btnPause.classList.add('hide');
        btnPlay.classList.remove('hide');
        
    }

    function reset() {
        btnPlay.classList.remove('hide');
        btnPause.classList.add('hide');
        btnSet.classList.remove('hide');
        btnStop.classList.add('hide'); 

    }

    function getMinutes(){
        let newMinutes = Number(prompt("Em quantos minutos quer colocar ?")) ||  0
        
        if(newMinutes < 0 || !newMinutes){
            alert("Nao é possivel adicionar minutos menor que 0 ou caracteres");
            
            return false;
        }

       return newMinutes;
        
    }

    return{
        reset,
        play,
        pause,
        getMinutes
    }

}
