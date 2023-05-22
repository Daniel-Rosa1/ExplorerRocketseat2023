export default function CardsControl({ buttonFlorets, buttonRain, buttonCoffeShop, buttonFirePlace}){
    const soundFlorest = new Audio("./sounds/floresta.wav")
    const soundRain = new Audio('./sounds/Chuva.wav')
    const soundCoffeShop = new Audio('./sounds/Cafeteria.wav')
    const soundFirePlace = new Audio('./sounds/Lareira.wav')

    function stopCardsSonds(){
        soundFlorest.pause()
        soundRain.pause()
        soundCoffeShop.pause()
        soundFirePlace.pause()
    }

    function removeClassSelected(){
        buttonFlorets.florets.classList.remove('selected')
        buttonRain.rain.classList.remove('selected')
        buttonCoffeShop.coffeShop.classList.remove('selected')
        buttonFirePlace.firePlace.classList.remove('selected')
    }

    function playFlorest(){
        const florestIsSelected = buttonFlorets.florets.classList.contains('selected')
        if(florestIsSelected){
            removeClassSelected()
            stopCardsSonds()
            return
        }
        removeClassSelected()
        stopCardsSonds()
        buttonFlorets.selected()
        soundFlorest.play()
        soundFlorest.loop = true
    }

    function playRain(){
        const rainIsSelected = buttonRain.rain.classList.contains('selected')
        if(rainIsSelected){
            removeClassSelected()
            stopCardsSonds()
            return
        }
        removeClassSelected()
        stopCardsSonds()
        buttonRain.selected()
        soundRain.play()
        soundRain.loop = true
    }

    function playCoffeShop(){
        const coffeShopIsSelected = buttonCoffeShop.coffeShop.classList.contains('selected')
        if(coffeShopIsSelected){
            removeClassSelected()
            stopCardsSonds()
            return
        }
        removeClassSelected()
        stopCardsSonds()
        buttonCoffeShop.selected()
        soundCoffeShop.play()
        soundCoffeShop.loop = true
    }

    function playFirePlace(){
        const firePlaceIsSelected = buttonFirePlace.firePlace.classList.contains('selected')
        if(firePlaceIsSelected){
            removeClassSelected()
            stopCardsSonds()
            return
        }
        removeClassSelected()
        stopCardsSonds()
        buttonFirePlace.selected()
        soundFirePlace.play()
        soundFirePlace.loop= true
    }

    return{
        playFlorest,
        playRain,
        playCoffeShop,
        playFirePlace
    }
}