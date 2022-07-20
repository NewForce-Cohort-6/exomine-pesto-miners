import { setState, getTransientState, getArray } from "./database.js";

//since no other function is exported, I've exported this "emptyString" to exomine.js in order for this module to be read. there's probably a better way.
export const emptyString = ""

//function to build cart HTML, called below when minerals radio button is selected
const buildCart = () => {

    const state = getTransientState()
    const minerals = getArray("minerals")
    const facilities = getArray("facilities")
    const mineralsAtFacilities = getArray("mineralsAtFacilities")
    let html = ""

    minerals.forEach(mineral => { //find mineral name, facility name, and create "added to cart" string for chosen mineral
        if (mineral.id === state.mineralId) {
            facilities.forEach(facility => {
                if (facility.id === state.facilityId){ //expects facilityId to be previously set in transient state
                    html += `1 ton of ${mineral.name} from ${facility.name} has been added to the cart`
                    mineralsAtFacilities.forEach(object => { //iterate through bridge table to match facilityId & mineralId to set mineral "amount" to transientState
                        if (facility.id === object.facilityId && mineral.id === object.mineralId) {
                            setState("amount", object.amount)
                            setState('facilityId', object.facilityId)
                        }
                    })
                }
            })
        }       
    })
    return html
}

document.addEventListener("change", (event) => { 
        if (event.target.name === "mineralId") {
            setState(event.target.name, parseInt(event.target.value)) //set mineralId for selected mineral in transientState database object

            const cartItemDiv = document.querySelector(".cart--item")
            const cartHTML = buildCart()
            cartItemDiv.innerHTML = cartHTML
        }
    }
)
