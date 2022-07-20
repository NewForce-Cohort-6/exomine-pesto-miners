import { Exomine } from "./exomine.js"
import { addCustomOrder, displayColonyMinerals } from "./purchasing.js"
import { getColonyByGovId } from './purchasing.js'
import { getFacilityMinerals } from './facilities.js'
import {regenerateHtml} from './database.js'

document.addEventListener('click', event => {
    const itemClicked = event.target
    if (itemClicked.id === 'cart--purchase') {
        //
        addCustomOrder()
        const mineralContainer = document.querySelector('.colony-minerals')
        const facilityMinerals = document.querySelector(".facility-minerals")
        // Grabbing correct governor, colony, displaying minerals
        const x = document.getElementById('options--governors')
        const y = x.options[x.selectedIndex].value
        let selected = getColonyByGovId(y)
        mineralContainer.innerHTML = displayColonyMinerals(selected)

        facilityMinerals.innerHTML = getFacilityMinerals()

}})

document.addEventListener('change', event => {
    if (event.target.id === 'options--governors') {
        const x = document.getElementById('options--governors')
        const mineralContainer = document.querySelector('.colony-minerals')
        const y = x.options[x.selectedIndex].value
        let selected = getColonyByGovId(y)
        mineralContainer.innerHTML = displayColonyMinerals(selected)
    }
})

document.querySelector("#container").innerHTML = Exomine()

const renderAllHtml = () => {
    document.querySelector("#container").innerHTML = Exomine()
}

renderAllHtml()

document.addEventListener("stateChanged", event => {
    renderAllHtml()
})