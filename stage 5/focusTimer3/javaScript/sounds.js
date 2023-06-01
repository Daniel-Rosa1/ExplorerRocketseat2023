export default function Sound(){
    const soundFlorest = new Audio("./sounds/floresta.wav")
    const soundRain = new Audio('./sounds/Chuva.wav')
    const soundCoffeShop = new Audio('./sounds/Cafeteria.wav')
    const soundFirePlace = new Audio('./sounds/Lareira.wav')

    const handleFlorestVolume = document.querySelector("#florestVolume")
    const handleRaintVolume = document.querySelector("#rainVolume")
    const handleCoffeShopVolume = document.querySelector("#coffeShopVolume")
    const handleFirePlaceVolume = document.querySelector("#firePlaceVolume")
    
    handleFlorestVolume.addEventListener("click", ()=>{
        soundFlorest.volume = Number(handleFlorestVolume.value/100) 
    })

    handleRaintVolume.addEventListener("click", ()=>{
        soundRain.volume = Number(handleRaintVolume.value/100) 
    })

    handleCoffeShopVolume.addEventListener("click", ()=>{
        soundCoffeShop.volume = Number(handleCoffeShopVolume.value/100) 
    })

    handleFirePlaceVolume.addEventListener("click", ()=>{
        soundFirePlace.volume = Number(handleFirePlaceVolume.value/100) 
    })
    

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