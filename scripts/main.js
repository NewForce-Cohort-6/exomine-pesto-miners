import { Exomine } from "./exomine.js"


export const renderAllHtml = () => {
    document.querySelector("#container").innerHTML = Exomine()
}

renderAllHtml()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHtml()
})