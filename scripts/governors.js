import { getArray } from "./database.js"

const governors = getArray("governors")
const colonies = getArray("colonies")

//change event listener for governors options dropdown, pass target value to buildColonyMinerals function
document.addEventListener("change", event => {
    //change event
    const itemClicked = event.target
    if(itemClicked.id.startsWith("options--governors")) {
        const facilities = document.querySelector(".options--facilities")
        //facilities.
        let colonyMinerals = document.querySelector(".row1--colony-materials")
        colonyMinerals.innerHTML = buildColonyMinerals(itemClicked.value)
    }
})

//build governors dropdown html, shoutout John Boone
export const buildGovernors = () => {
    let html = "<select id='options--governors'><option value='0'>Select a governor</option>"

    governors.forEach(governor => {
        html += `<option value="${governor.id}">${governor.name}</option>`
    })
    html += `</select>`
    return html
}

//display colony name for selected governor
export const buildColonyMinerals = (governorId) => {
    let colName = ""
    for(const colony of colonies) {
        for (const gov of governors) {
            if (parseInt(governorId) === gov.id) {
                if (gov.colonyId === colony.id) {
                    colName = colony.name
                }
            }
        }
    }
    let html = `<h2>${colName} Minerals</h2>`

    // governors.forEach(governor => {
    //     html += ``
    // })

    return html
}
