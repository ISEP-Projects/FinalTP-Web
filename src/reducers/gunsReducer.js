import * as actions from '../actions'

const stateDefault = {
	isLoading: true,
	errMess: null,
	gunsList: [],
}

export const gunsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.SAVE_GUNS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				gunsList: action.payload,
			}

		case actions.GUNS_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				gunsList: [],
			}

		case actions.GUNS_FAILED:
			return {
				...state,
				isLoading: false,
				errMess: action.payload,
			}
		default:
			return state
	}
}
