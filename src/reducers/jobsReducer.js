import * as actions from "../actions"
import Axios from "axios"

const stateDefault = {
	jobs: [],
}

export const jobsReducer = (state = stateDefault, action) => {
	switch (action.type) {
		case actions.GET_JOBS:
			return {
				...state,
				jobs: [],
			}

		default:
			return state
	}
}

export const getJobs = () => async (dispatch, getState) => {
	console.log("Calling API")
	const response = await Axios.get("http://localhost:8081/jobs")
	console.log("\nData received: ")
	dispatch(actions.getJobs(response.data))
}
