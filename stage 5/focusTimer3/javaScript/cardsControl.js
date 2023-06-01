import Sound from "./sounds.js"
const sound = Sound()

export default function CardsControl({ buttonFlorets, buttonRain, buttonCoffeShop, buttonFirePlace}){
    

    function removeClassSelected(){
        buttonFlorets.florest.classList.remove('selected')
        buttonRain.rain.classList.remove('selected')
        buttonCoffeShop.coffeShop.classList.remove('selected')
        buttonFirePlace.firePlace.classList.remove('selected')
    }

    function resetCards(){
        removeClassSelected()
        sound.stopSounds()
    }

    function florest(){
        if(event.target.id == "florestVolume"){
            return
        }
        const florestIsSelected = buttonFlorets.florest.classList.contains('selected')
        if(florestIsSelected){
            resetCards()
            return
        }
        resetCards()
        buttonFlorets.selected()
        sound.playFlorest()
    }

    function rain(){
        if(event.target.id == "rainVolume"){
            return
        }
        const rainIsSelected = buttonRain.rain.classList.contains('selected')
        if(rainIsSelected){
            resetCards()
            return
        }
        resetCards()
        buttonRain.selected()
        sound.playRain()
    }

    function coffeShop(){
        if(event.target.id == "coffeShopVolume"){
            return
        }
        const coffeShopIsSelected = buttonCoffeShop.coffeShop.classList.contains('selected')
        if(coffeShopIsSelected){
            resetCards()
            return
        }
        resetCards()
        buttonCoffeShop.selected()
        sound.playCoffeShop()
    }

    function firePlace(){
        if(event.target.id == "firePlaceVolume"){
            return
        }
        const firePlaceIsSelected = buttonFirePlace.firePlace.classList.contains('selected')
        if(firePlaceIsSelected){
            resetCards()
            return
        }
        resetCards()
        buttonFirePlace.selected()
        sound.playFirePlace()
    }

    return{
        florest,
        rain,
        coffeShop,
        firePlace
    }
}