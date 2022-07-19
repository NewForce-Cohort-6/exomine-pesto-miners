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
			name: 'Mars'
		},
		{
			id: 2,
			name: 'Earth'
		},
		{
			id: 3,
			name: 'Mercury'
		},
		{
			id: 4,
			name: 'Jupiter'
		}
	],
    facilities: [
        {
            id: 1,
            name: "Olympus Mons",
            active: true
        },{
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
        },
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
        },{
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
		{
			id: 2,
			mineralId: 4,
			facilityId: 1,
			amount: 5
		},
		{
			id: 3,
			mineralId: 5,
			facilityId: 1,
			amount: 150
		},
		{
			id: 4,
			mineralId: 2,
			facilityId: 2,
			amount: 60
		},
		{
			id: 5,
			mineralId: 3,
			facilityId: 2,
			amount: 70
		},
		{
			id: 6,
			mineralId: 4,
			facilityId: 3,
			amount: 70
		},
		{
			id: 7,
			mineralId: 5,
			facilityId: 3,
			amount: 12
		},
		{
			id: 8,
			mineralId: 1,
			facilityId: 4,
			amount: 94
		},
		{
			id: 9,
			mineralId: 2,
			facilityId: 4,
			amount: 50
		},
		{
			id: 10,
			mineralId: 5,
			facilityId: 4,
			amount: 6
		},
		{
			id: 11,
			mineralId: 3,
			facilityId: 5,
			amount: 13
		},
		{
			id: 12,
			mineralId: 4,
			facilityId: 6,
			amount: 43
		},
		{
			id: 13,
			mineralId: 5,
			facilityId: 6,
			amount: 12
		},
		{
			id: 14,
			mineralId: 1,
			facilityId: 7,
			amount: 64
		},
		{
			id: 15,
			mineralId: 3,
			facilityId: 7,
			amount: 50
		},
		{
			id: 16,
			mineralId: 5,
			facilityId: 7,
			amount: 79
		},
		{
			id: 17,
			mineralId: 2,
			facilityId: 8,
			amount: 10
		},
		{
			id: 18,
			mineralId: 4,
			facilityId: 8,
			amount: 76
		},
		{
			id: 19,
			mineralId: 1,
			facilityId: 9,
			amount: 13
		},
		{
			id: 20,
			mineralId: 2,
			facilityId: 9,
			amount: 46
		},
		{
			id: 21,
			mineralId: 4,
			facilityId: 9,
			amount: 13
		},
		{
			id: 22,
			mineralId: 5,
			facilityId: 9,
			amount: 20
		}
	],
    mineralsAtColonies: [],
    transientState: {
		id: 1,
		mineralId: 1,
		facilityId: 1,
		amount: 10,
		colonyId: 1
	}
}

export const getArray = (arrayName) => database[arrayName].map(object => ({...object})) 
export const getTransientState = () => ({...database.transientState})

export const setState = (property, id) => {
	database.transientState[property] = id
}

export const purchaseMineral = () => {
	// Broadcast custom event to entire document so that the
	// application can re-render and update state
	const newOrder = {}
	newOrder.id = database.mineralsAtColonies.length + 1
	newOrder.mineralId = database.transientState.mineralId
	newOrder.colonyId = database.transientState.colonyId
	database.mineralsAtColonies.push(newOrder)

	document.dispatchEvent(new CustomEvent('stateChanged'))
	regenerateHtml()
}

export const regenerateHtml = () => {
    document.dispatchEvent(new CustomEvent("stateChanged"))
}