import * as actions from '../actions'

const stateDefault = {
	isLoading: true,
	errMess: null,
	mercs: [],
}

export const mercsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.SAVE_MERCS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				mercs: action.payload,
			}

		case actions.MERCS_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				mercs: [],
			}

		case actions.MERCS_FAILED:
			return {
				...state,
				isLoading: false,
				errMess: action.payload,
			}

		default:
			return state
	}
}
