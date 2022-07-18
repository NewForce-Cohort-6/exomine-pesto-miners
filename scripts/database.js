const database = {
    governors: [
        {
            id: 1,
            name: "John Boone",
            active: true,
            colonyId: 1,
        },
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
        {
            id: 2,
            name: "Elysium",
            active: true
        },
        {
            id: 3,
            name: "South Fossa",
            active: true
        },
        {
            id: 4, 
            name: "Hardneck",
            active: false
        }
        {
            id: 5,
            name: "Amethyst Core",
            active: true
        },
        {
            id: 6,
            name: "Basil Valley",
            active: true
        },
        {
            id: 7,
            name: "Jemisin",
            active: true
        },
        {
            id: 8,
            name: "Le Guin",
            active: true
        },
        {
            id: 9,
            name: "Hot Point",
            active: true
        }
    ],
    minerals: [
        {
            id: 1,
            name: "copper"
        },
        {
            id: 2,
            name: "iron"
        },
        {
            id: 3,
            name: "palladium"
        },
        {
            id: 4,
            name: "lithium"
        },
        {
            id: 5,
            name: "chromium"
        },
        {
            id: 6,
            name: "gypsum"
        },
        {
            id: 7,
            name: "diamond"
        },
        {
            id: 8,
            name: "chromium"
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