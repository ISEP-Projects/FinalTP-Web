import * as actions from '../actions'

const stateDefault = {
	isLoading: true,
	errMess: null,
	jobs: [],
	showForm: false,
}

export const jobsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.SAVE_JOBS:
			return {
				...state,
				isLoading: false,
				errMess: null,
				jobs: action.payload,
			}

		case actions.JOBS_LOADING:
			return {
				...state,
				isLoading: true,
				errMess: null,
				jobs: [],
			}

		case actions.JOBS_FAILED:
			return {
				...state,
				isLoading: false,
				errMess: action.payload,
			}

		case actions.SHOW_ADD_JOB_FORM:
			return {
				...state,
				showForm: action.payload,
			}

		default:
			return state
	}
}
