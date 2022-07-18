const database = {
	governors: [
		{
			id: 1,
			name: 'John Boone',
			active: true,
			colonyId: 1
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
			name: 'Olympus Mons',
			active: true
		}
	],
	minerals: [
		{
			id: 1,
			name: 'copper'
		}
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
		}
	],
	mineralsAtColonies: [
		{
			id: 1,
			mineralId: 1,
			colonyId: 1,
			amount: 0
		}
	],
	transientState: {}
};

export const getArray = (arrayName) => database[arrayName].map((object) => ({ ...object }));
export const getTransientState = () => database.transientState.map((state) => ({ ...state }));

export const setFacility = (facilityId) => {
	database.transientState.selectedFacility = facilityId;
	document.dispatchEvent(new CustomEvent('stateChanged'));
};

export const purchaseMineral = () => {
	// Broadcast custom event to entire document so that the
	// application can re-render and update state
	document.dispatchEvent(new CustomEvent('stateChanged'));
};
