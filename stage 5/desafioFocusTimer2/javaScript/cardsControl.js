import Sound from "./sounds.js"
const sound = Sound()

export default function CardsControl({ buttonFlorets, buttonRain, buttonCoffeShop, buttonFirePlace}){

    function removeClassSelected(){
        buttonFlorets.florets.classList.remove('selected')
        buttonRain.rain.classList.remove('selected')
        buttonCoffeShop.coffeShop.classList.remove('selected')
        buttonFirePlace.firePlace.classList.remove('selected')
    }

    function resetCards(){
        removeClassSelected()
        sound.stopSounds()
    }

    function florest(){
        const florestIsSelected = buttonFlorets.florets.classList.contains('selected')
        if(florestIsSelected){
            resetCards()
            return
        }
        resetCards()
        buttonFlorets.selected()
        sound.playFlorest()
    }

    function rain(){
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