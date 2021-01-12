export const GET_MERCS = "GET_MERCS"
export const ADD_MERC = "ADD_MERC"
export const MODIFY_MERC = "MODIFY_MERC"
export const SET_GUNS = "SET_GUNS"
export const GET_JOBS = "GET_JOBS"
export const ADD_JOB = "ADD_JOB"
export const DELETE_JOB = "DELETE_JOB"

export const getMercs = (mercs) => ({
	type: GET_MERCS,
	payload: mercs,
})

export const addMerc = (merc) => ({
	type: ADD_MERC,
	payload: merc,
})

export const modifyMerc = (merc) => ({
	type: MODIFY_MERC,
	payload: merc,
})

export const setGuns = (guns) => ({
	type: SET_GUNS,
	payload: guns,
})

export const getJobs = (jobs) => ({
	type: GET_JOBS,
	payload: jobs,
})

export const addJob = (job) => ({
	type: ADD_JOB,
	payload: job,
})

export const deleteJob = (job) => ({
	type: DELETE_JOB,
	payload: job,
})
