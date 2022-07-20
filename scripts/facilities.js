import { getArray, getTransientState, setState, regenerateHtml } from "./database.js"
import { buildColonyMinerals, dispatchHeaderChange } from "./governors.js"

document.addEventListener("change", event => {
    const itemClicked = event.target
    if(itemClicked.id.startsWith("options--facilities")) {
        setState("facilityId",parseInt(itemClicked.value))
        regenerateHtml()
        let facilityMinerals = document.querySelector(".facility-minerals")
        facilityMinerals.innerHTML = getFacilityMinerals()
        dispatchHeaderChange()
    }
})

const facilities = getArray("facilities")

export const buildFacilities = () => {
    const state = getTransientState()
    //if a governor/colony has not been selected, this dropdown is disabled
    let html = `<select id='options--facilities' ${!state.colonyId ? "disabled" : ""}><option value='0'>Select a facility</option>`
    
    //when the html is regenerated, the facility that is stored in state loads as selected
    for (const facility of facilities) {
        if (facility.active) {
            html += `<option value="${facility.id}" ${state.facilityId === facility.id ? "selected" : ""}>${facility.name}</option>`
        }
    }
    html += `</select>`
    return html
}

const mineralsAtFacilities = getArray("mineralsAtFacilities")
const allMinerals = getArray("minerals")
const mineralsAtColonies = getArray("mineralsAtColonies")

//returns an array of minerals at the selected facility
export const getFacilityMinerals = () => {
    const state = getTransientState()
    //find what minerals are available at the selected facility
    let mineralsAtFacility = []
    for (const mineral of mineralsAtFacilities) {
        if(state.facilityId === mineral.facilityId) {
            mineralsAtFacility.push(mineral)
        }
    }
    let html = ""
    let amount = 0
    //match those bridge table mineral to their name in the mineral table
    for (const bridgeMineral of mineralsAtFacility) {
        for (const mineral of allMinerals) {
            if(mineral.id === bridgeMineral.mineralId) {
                amount = bridgeMineral.amount
                html += `<input type="radio" id="button-${mineral.id}" name="mineralId" value="${mineral.id}"/><label for="button-${mineral.id}">${amount} tons of ${mineral.name}</label><br>`
            }
        }
    }
    return html
}