import Axios from 'axios'

export const MERCS_LOADING = 'MERCS_LOADING'
export const MERCS_FAILED = 'MERCS_FAILED'
export const SAVE_MERCS = 'SAVE_MERCS'
export const ADD_MERC = 'ADD_MERC'
export const MODIFY_MERC = 'MODIFY_MERC'
export const SET_GUNS = 'SET_GUNS'
export const SAVE_JOBS = 'SAVE_JOBS'
export const ADD_JOB = 'ADD_JOB'
export const DELETE_JOB = 'DELETE_JOB'

export const mercsLoading = () => ({
	type: MERCS_LOADING,
})

export const saveMercs = (mercs) => ({
	type: SAVE_MERCS,
	payload: mercs,
})

export const mercsFailed = (errmess) => ({
	type: MERCS_FAILED,
	payload: errmess,
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

export const saveJobs = (jobs) => ({
	type: SAVE_JOBS,
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

export const getGuns = () => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.get('http://localhost:8081/guns')
	console.log('\nData received: ')
	dispatch(setGuns(response.data))
}

export const getMercs = () => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.get('http://localhost:8081/merc/Allmercs')
	console.log('\nMercs Data received: ')
	dispatch(saveMercs(response.data))
}

export const getJobs = () => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.get('http://localhost:8081/job/Alljobs')
	console.log('\nJobsData received: ')
	console.log(response.data)
	dispatch(saveJobs(response.data))
}

export const createMerc = (nickname, legalAge) => async (
	dispatch,
	getState
) => {
	console.log('Calling API')
	const response = await Axios.post(
		`http://localhost:8081/merc/create/${nickname}/${legalAge}`
	)
	if (response.status === 200) {
		console.log('\nMerc created ')
		//get Updated mercsList
		dispatch(getMercs())
	}
}

export const buyGun = (mercId, gunId) => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.put(
		`http://localhost:8081/merc/buygun/${mercId}/${gunId}`
	)
	if (response.status === 200) {
		console.log('\nGun bought ')
	}
}
