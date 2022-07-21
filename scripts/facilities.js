import { getArray, getTransientState, setState, regenerateHtml } from "./database.js"
import { dispatchHeaderChange, buildColonyMineralsContent, buildColonyMineralsHeader } from "./governors.js"

document.addEventListener("change", event => {
    const itemClicked = event.target
    if(itemClicked.id.startsWith("options--facilities")) {
        setState("facilityId",parseInt(itemClicked.value))
        regenerateHtml()
        let facilityMinerals = document.querySelector(".facility-minerals")
        facilityMinerals.innerHTML = getFacilityMinerals()
        buildColonyMineralsHeader(colony.name)
        buildColonyMineralsContent(colony.name)
        dispatchHeaderChange()
        setState("mineralId",0)
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

//returns an array of minerals at the selected facility
export const getFacilityMinerals = () => {
    const mineralsAtColonies = getArray('mineralsAtColonies')
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
                const minArray = mineralsAtColonies.filter(x => x.mineralId === mineral.id && state.facilityId === bridgeMineral.facilityId)
                amount = bridgeMineral.amount - minArray.length
                if (amount > 0) {
                    html += `<input type="radio" id="button-${mineral.id}" name="mineralId" value="${mineral.id}" ${state.mineralId === mineral.id ? "checked" : ""}/><label for="button-${mineral.id}">${amount} tons of ${mineral.name}</label><br>`
                }
            }
        }
    }
    return html
}