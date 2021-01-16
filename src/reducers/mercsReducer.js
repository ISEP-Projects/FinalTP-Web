import * as actions from '../actions'
import Axios from 'axios'

const stateDefault = {
	isLoading: true,
	errMess: null,
	mercs: [],
}

export const mercsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.GET_MERCS:
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

export const getMercs = () => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.get('http://localhost:8081/allmercs')
	console.log('\nMercs Data received: ')
	dispatch(actions.getMercs(response.data))
}
