const database = {
    governors: [
        {
            id: 1,
            name: "Katrina Bahringer",
            active: true,
            colonyId: 1
        },{
            id: 2,
            name: "Patricia Purdy",
            active: false,
            colonyId: 2
        },{
            id: 3,
            name: "Lola Wolff",
            active: true,
            colonyId: 2
        },{
            id: 4,
            name: "Damon Hartmann",
            active: true,
            colonyId: 3
        },{
            id: 5,
            name: "Laney Lesch",
            active: true,
            colonyId: 4
        },{
            id: 6,
            name: "Rae Deckow",
            active: true,
            colonyId: 2
        }         
    ],
    colonies: [
        {
            id: 1,
            name: "Mars"
        },
    ],
    facilities: [
        {
            id: 1,
            name: "Olympus Mons",
            active: true
        },
    ],
    minerals: [
        {
            id: 1,
            name: "copper"
        },
    ],
    mineralsAtFacilities: [
        {
            id: 1,
            mineralId: 1,
            facilityId: 1,
            amount: 10
        },
    ],
    mineralsAtColonies: [
        {
            id: 1,
            mineralId: 1,
            colonyId: 1,
            amount: 0
        },
    ],
    transientState: {}
}

export const getArray = (arrayName) => database[arrayName].map(object => ({...object}))
export const getTransientState = () => database.transientState.map(state => ({...state}))

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire document so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}