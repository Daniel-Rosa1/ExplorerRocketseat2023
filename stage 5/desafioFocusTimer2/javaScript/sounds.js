export default function Sound(){
    const soundFlorest = new Audio("./sounds/floresta.wav")
    const soundRain = new Audio('./sounds/Chuva.wav')
    const soundCoffeShop = new Audio('./sounds/Cafeteria.wav')
    const soundFirePlace = new Audio('./sounds/Lareira.wav')

    function stopSounds(){
        soundFlorest.pause()
        soundRain.pause()
        soundCoffeShop.pause()
        soundFirePlace.pause()
    }

    function playFlorest(){
        soundFlorest.play()
        soundFlorest.loop = true
    }

    function playRain(){
        soundRain.play()
        soundRain.loop = true  
    }

    function playCoffeShop(){
        soundCoffeShop.play()
        soundCoffeShop.loop = true
    }

    function playFirePlace(){
        soundFirePlace.play()
        soundFirePlace.loop= true
    }

    return{
        playFlorest,
        playRain,
        playCoffeShop,
        playFirePlace,
        stopSounds
    }
}