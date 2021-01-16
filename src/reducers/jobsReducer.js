import * as actions from '../actions'

const stateDefault = {
	jobs: [],
}

export const jobsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.SAVE_JOBS:
			return {
				...state,
				jobs: action.payload,
			}

		default:
			return state
	}
}
