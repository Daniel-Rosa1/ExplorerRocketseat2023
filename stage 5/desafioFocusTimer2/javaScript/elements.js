const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

const buttonPlay ={
    play: document.querySelector(".play"),
    hideOrNot(){
        buttonPlay.play.classList.toggle('hide')
    }
    }
const buttonPause ={
    pause:document.querySelector(".pause"),
    hideOrNot(){
        buttonPause.pause.classList.toggle('hide')
    }
}
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonMinus = document.querySelector(".minus")

const buttonFlorets ={
    florets : document.querySelector(".florets"),
    sound: document.querySelector('.floret audio'),
    selected(){
        buttonFlorets.florets.classList.toggle("selected")
    },
}
 
const buttonRain ={
    rain : document.querySelector(".rain"),
    selected(){
        buttonRain.rain.classList.toggle("selected")
    }
}

const buttonCoffeShop ={
    coffeShop : document.querySelector(".coffe-shop"),
    selected(){
        buttonCoffeShop.coffeShop.classList.toggle("selected")
    },
}

const buttonFirePlace ={
    firePlace : document.querySelector(".fireplace"),
    selected(){
        buttonFirePlace.firePlace.classList.toggle("selected")
    },
}

export{
    minutesDisplay,
    secondsDisplay,
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonFlorets,
    buttonRain,
    buttonCoffeShop,
    buttonFirePlace
}