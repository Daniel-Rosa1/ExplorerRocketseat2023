
import aparences from "./aparence.js"

export default function router(){
    const aparence = aparences()

    let routes = {}

    function add(routeName, page){
        routes[routeName] = page
    }

    function route(event){
        event = event || window.event
        event.preventDefault()

        window.history.pushState({},"", event.target.href)

        handle()
    }

    function handle(){
        const {pathname} = window.location
        const route = routes[pathname] || routes[404]
        
        aparence.changeBackgroundImage(route)

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html
        })
    }
    
    return{
        add,
        route,
        handle
    }
}