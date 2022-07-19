import { Exomine } from "./exomine.js"
import { addCustomOrder } from "./purchasing.js"
import { purchaseMineral } from './database.js'

document.addEventListener('click', event => {
    const itemClicked = event.target
    if (itemClicked.id === 'cart--purchase') {
        addCustomOrder()
    }
})

document.querySelector("#container").innerHTML = Exomine()
