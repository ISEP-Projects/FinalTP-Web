import * as actions from '../actions'
import Axios from "axios"

const stateDefault = {
	mercs: [],
}

export const mercsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.GET_MERCS:
			return {
				...state,
				mercs: action.payload,
			}

		default:
			return state
	}
}

export const getMercs = () => async (dispatch, getState) => {
	console.log("Calling API")
	const response = await Axios.get("http://localhost:8081/mercs")
	console.log("\nData received: ")
	dispatch(actions.getMercs(response.data))
}
