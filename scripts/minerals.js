import { setState, getTransientState, getArray } from "./database.js";

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
                    if (facility.id === mineralsAtFacilities.facilityId && mineral.id === mineralsAtFacilities.mineralId) {
                        setState(mineralsAtFacilities.amount, "amount")
                    }
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
