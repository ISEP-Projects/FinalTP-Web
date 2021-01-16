import * as actions from '../actions'

const stateDefault = {
	gunsList: [],
}

export const gunsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.SET_GUNS:
			return {
				...state,
				gunsList: action.payload,
			}

		default:
			return state
	}
}
