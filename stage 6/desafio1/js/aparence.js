export default function aparences(){

    function changeBackgroundImage(route){
        if(route === "/pages/home.html"){
            cleanClassList()
            document.body.classList.add('home')
            document.querySelector("#home").classList.add('current')
        }
        if(route === "/pages/universe.html"){
            cleanClassList()
            document.body.classList.add('universe')
            document.querySelector("#universe").classList.add('current')
        }
    
        if(route === "/pages/exploration.html" ){
            cleanClassList()
            document.body.classList.add('exploration')
            document.querySelector("#exploration").classList.add('current')
        }
    }
    
    function cleanClassList(){
        document.body.classList.remove("home")
        document.body.classList.remove("universe")
        document.body.classList.remove("exploration")
        document.querySelector("#home").classList.remove('current')
        document.querySelector("#universe").classList.remove('current')
        document.querySelector("#exploration").classList.remove('current')
    }

    return{
        changeBackgroundImage
    }
}