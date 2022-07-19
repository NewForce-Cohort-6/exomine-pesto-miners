import { Exomine } from "./exomine.js"
import { addCustomOrder } from "./purchasing.js"
import { purchaseMineral } from './database.js'

document.addEventListener('click', event => {
    const itemClicked = event.target
    if (itemClicked.id === 'cart--purchase') {
        let test = document.querySelector('#colony-minerals--container')
        test.innerHTML = addCustomOrder()
    }
})

document.querySelector("#container").innerHTML = Exomine()

export const renderAllHtml = () => {
    document.querySelector("#container").innerHTML = Exomine()
}

renderAllHtml()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHtml()
})
