export default function ColorMode(){
    const main = document.querySelector(".main")
    const timer = document.querySelector("#countdown ")
    const buttonsTimer = document.querySelectorAll(".control")
    const cards = document.querySelectorAll(".wrapper-card")
    
    function addClass(list, newClass){
        for(let i = 0; i < list.length;i++){
            list[i].classList.add(`${newClass}`)
        }
    }

    function removeClass(list, newClass){
        for(let i = 0; i < list.length;i++){
            list[i].classList.remove(`${newClass}`)
        }
    }
    
    function darkMode(){
        main.style.background = "#121214"
        timer.style.color = "hsla(0, 0%, 100%, 1)"
        addClass(cards, "card-dark-mode")
        addClass(buttonsTimer, "control-dark-mode")
    }

    function ligthMode(){
        main.style.background = "#FFF"
        timer.style.color = "#323238"
        removeClass(cards, "card-dark-mode")
        removeClass(buttonsTimer, "control-dark-mode")
    }


    return{
        darkMode,
        ligthMode
    }

}