import { getArray, setState, getTransientState, regenerateHtml } from "./database.js"
import { buildFacilities } from "./facilities.js"
import { displayColonyMinerals } from "./purchasing.js"

const governors = getArray("governors")
const colonies = getArray("colonies")

//change event listener for governors options dropdown, pass target value to buildColonyMinerals function
document.addEventListener("change", event => {
    const itemClicked = event.target
    if(itemClicked.id.startsWith("options--governors")) {
        //colony is set in buildColonyMinerals
        const colony = findColonyByGovernor(itemClicked.value)
        setState("colonyId",colony.id)
        setState("governorId",parseInt(itemClicked.value))
        regenerateHtml()
        if(event.target!=0) {
            setState("facilityId",0)
            regenerateHtml()
            buildColonyMineralsHeader(colony.name)
            buildColonyMineralsContent(colony.name)
            dispatchHeaderChange()
        } 
    }
})

//build governors dropdown html, shoutout John Boone
export const buildGovernors = () => {
    let html = "<select id='options--governors'><option value='0'>Select a governor</option>"
    const state = getTransientState()
    const activeGovernors = governors.filter(governor => governor.active)
    activeGovernors.forEach(governor => {
        html += `<option value="${governor.id}" ${((state.colonyId === governor.colonyId) && (governor.id === state.governorId)) ? "selected" : ""}>${governor.name}</option>`
    })
    html += `</select>`
    return html
}

//display correct colony name for selected governor in the Colony Minerals heading
export const findColonyByGovernor = (governorId) => {
    let foundColony = ""
    for(const colony of colonies) {
        for (const gov of governors) {
            if (parseInt(governorId) === gov.id) {
                if (gov.colonyId === colony.id) {
                    foundColony = colony
                }
            }
        }
    }
    return foundColony
}

let header = ""
document.addEventListener("header", event => {
    let colonyMineralsHeader = document.querySelector("#colony-minerals--header")
    colonyMineralsHeader.innerHTML = header
})

export const buildColonyMineralsHeader = (colonyName) => {
    //add colony mineral list here
    if (colonyName) {
        header = `${colonyName} Minerals`
    } else {
        header = `Colony Minerals`
    }
    return header
}

let content = ""
document.addEventListener("content", event => {
    let colonyMineralsHeader = document.querySelector(".colony-minerals")
    colonyMineralsHeader.innerHTML = content
})

export const buildColonyMineralsContent = (colonyName) => {
    //add colony mineral list here
    const state = getTransientState()
    if (colonyName) {
        content = displayColonyMinerals(state.colonyId)
    }
    return content
}

export const dispatchHeaderChange = () => {
    document.dispatchEvent(new CustomEvent("header"))
    document.dispatchEvent(new CustomEvent('content'))
}
