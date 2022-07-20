import { getTransientState, setState } from './database.js'
import { getArray } from './database.js'
import { purchaseMineral } from './database.js'

const governors = getArray('governors')
const colonies = getArray('colonies')
const facilities = getArray('facilities')
const minerals = getArray('minerals')
const mineralFacilites = getArray('mineralsAtFacilities')

//click event for button

export const addCustomOrder = () => {
    //get copy of transient state
    const newOrder = getTransientState()
    const chosenColony = filterColonyById(newOrder.colonyId)
    const chosenFacility = filterFacilityById(newOrder.facilityId)
    const chosenMineral = filterMineralById(newOrder.mineralId)

    //1 ton of chosen material subtracted from chosen facility
    subtractMineralsfromFacilities(chosenMineral.id, chosenFacility.id)
    purchaseMineral()
    
    
    //Shopping cart cleared
    
}
//available amount for selected colony re-rendered

const filterColonyById = (colonyId) => {
    for (const colony of colonies) {
        if (colonyId === colony.id) {
            return colony
        }
    }
}

const filterFacilityById = (facilityId) => {
    for (const facility of facilities) {
        if (facilityId === facility.id) {
            return facility
        }
    }
}

const filterMineralById = (mineralId) => {
    for (const mineral of minerals) {
        if (mineralId === mineral.id) {
            return mineral
        }
    }
}

//1 ton of chosen material added to colonies available minerals

export const displayColonyMinerals = (colonyId) => {
    //available amount for selected facility re-rendered
    let html = ``
    const colonyMinerals = getArray('mineralsAtColonies')
    const colonyArray = colonyMinerals.filter(item => item.colonyId === colonyId)

    const colonyMineralObjs = colonyArray.map(x => minerals.find(y => x.mineralId === y.id))
    console.log(colonyMineralObjs)

    const colonySet = [... new Set(colonyMineralObjs) ]
   const taco =  colonySet.map(x => {
    x.amount = colonyMineralObjs.filter(y=> y.id === x.id).length
    return x
})
    for (const colony of colonySet) {
        html += `<p>${colony.amount} tons of ${colony.name}</p>`
    }
    console.log(taco)
    
    return html
}

const subtractMineralsfromFacilities = (mineralId, facilityId) => {
    for (const item of mineralFacilites) {
        if(item.mineralId === mineralId && item.facilityId === facilityId) {
            if(item.amount > 0) {
                setState('amount', item.amount - 1)
                const transState = getTransientState()
            } else {
                return null
            }
        }
    }
}

export const getColonyByGovId = (govId) => {
    let chosenGov = governors.find(gov => gov.id === parseInt(govId))
    for (const colony of colonies) {
        if (chosenGov.colonyId === colony.id){
            return colony.id
        }
    }
}