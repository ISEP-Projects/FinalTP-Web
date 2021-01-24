import * as actions from '../actions'

const stateDefault = {
	isLoading: true,
	errMess: null,
	mercs: [],
	showForm: false,
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

		case actions.SHOW_ADD_MERC_FORM:
			return {
				...state,
				showForm: action.payload,
			}

		default:
			return state
	}
}
