import * as actions from "../actions"
import Axios from "axios"

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

export const getGuns = () => async (dispatch, getState) => {
	console.log("Calling API")
	const response = await Axios.get("http://localhost:8081/guns")
	console.log("\nData received: ")
	dispatch(actions.setGuns(response.data))
}
