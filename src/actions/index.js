import Axios from 'axios'

export const MERCS_LOADING = 'MERCS_LOADING'
export const GUNS_LOADING = 'GUNS_LOADING'
export const JOBS_LOADING = 'JOBS_LOADING'
export const MERCS_FAILED = 'MERCS_FAILED'
export const GUNS_FAILED = 'GUNS_FAILED'
export const JOBS_FAILED = 'JOBS_FAILED'
export const SAVE_MERCS = 'SAVE_MERCS'
export const ADD_MERC = 'ADD_MERC'
export const MODIFY_MERC = 'MODIFY_MERC'
export const SAVE_GUNS = 'SAVE_GUNS'
export const SAVE_JOBS = 'SAVE_JOBS'
export const SHOW_ADD_JOB_FORM = 'SHOW_ADD_JOB_FORM'
export const SHOW_ADD_MERC_FORM = 'SHOW_ADD_MERC_FORM'
export const DELETE_JOB = 'DELETE_JOB'
export const SET_TOAST = 'SET_TOAST'
export const SHOW_TOAST = 'SHOW_TOAST'

export const mercsLoading = () => ({
	type: MERCS_LOADING,
})

export const gunsLoading = () => ({
	type: GUNS_LOADING,
})

export const jobsLoading = () => ({
	type: JOBS_LOADING,
})

export const saveMercs = (mercs) => ({
	type: SAVE_MERCS,
	payload: mercs,
})

export const mercsFailed = (errmess) => ({
	type: MERCS_FAILED,
	payload: errmess,
})

export const gunsFailed = (errmess) => ({
	type: GUNS_FAILED,
	payload: errmess,
})

export const jobsFailed = (errmess) => ({
	type: JOBS_FAILED,
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

export const saveGuns = (guns) => ({
	type: SAVE_GUNS,
	payload: guns,
})

export const saveJobs = (jobs) => ({
	type: SAVE_JOBS,
	payload: jobs,
})

export const showAddJobForm = (bool) => ({
	type: SHOW_ADD_JOB_FORM,
	payload: bool,
})

export const showAddMercForm = (bool) => ({
	type: SHOW_ADD_MERC_FORM,
	payload: bool,
})

export const setShowToast = (bool) => ({
	type: SHOW_TOAST,
	payload: bool,
})

export const setToast = (content) => ({
	type: SET_TOAST,
	payload: content,
})

export const getGuns = () => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.get('http://localhost:8081/guns')
		.then((response) => {
			console.log('\nGun Data received: ')
			dispatch(saveGuns(response.data))
		})
		.catch((error) => {
			console.log('\nGun Data not received: ' + error.message)
			dispatch(gunsFailed(error.message))
			alertMessage(error.message)
		})
}

export const getMercs = () => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.get('http://localhost:8081/merc/Allmercs')
		.then((response) => {
			console.log('\nMercs Data received: ')
			dispatch(saveMercs(response.data))
		})
		.catch((error) => {
			console.log('\nMerc Data not received: ' + error.message)
			dispatch(mercsFailed(error.message))
			alertMessage(error.message)
		})
}

export const getJobs = () => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.get('http://localhost:8081/job/Alljobs')
		.then((response) => {
			console.log('\nJob Data received: ')
			dispatch(saveJobs(response.data))
		})
		.catch((error) => {
			console.log('\nJob Data not received: ' + error.message)
			dispatch(jobsFailed(error.message))
			alertMessage(error.message)
		})
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
		console.log('\nMerc created ' + response.data.result)
		dispatch(getMercs())
	}
}

export const buyGun = (mercId, gunId) => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.put(`http://localhost:8081/merc/buygun/${mercId}/${gunId}`)
		.then((result) => {
			console.log('\nGun bought')
			console.log(result)
			dispatch(getMercs())
			dispatch(setShowToast(true))
			dispatch(setToast('Gun bought'))
		})
		.catch((error) => {
			console.log('Error')
			console.log(error)
			if (error.response.status === 402 || error.response.status === 404) {
				console.log('\nGun not bought: ')
				dispatch(setShowToast(true))
				dispatch(setToast(error.response.data))
			} else {
				alertMessage(error.message)
			}
		})
}

export const deleteMerc = (id) => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.delete(`http://localhost:8081/merc/${id}`)
		.then((response) => {
			if (response.status === 200) {
				console.log('\nMerc deleted ')
				//get Updated mercsList
				dispatch(getMercs())
				dispatch(setShowToast(true))
				dispatch(setToast(response.data))
			}
		})
		.catch((err) => {
			dispatch(setShowToast(true))
			dispatch(setToast(err.response.data))
			alertMessage(err.message)
		})
}

export const deleteJob = (id) => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.delete(`http://localhost:8081/job/${id}`)
	if (response.status === 200) {
		console.log('\nJob deleted ')
		//get Updated mercsList
		dispatch(getJobs())
		dispatch(setShowToast(true))
		dispatch(setToast('Job deleted '))
	}
}

export const createJob = (
	fixer,
	title,
	description,
	henchmenCount,
	reward
) => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.post(
		`http://localhost:8081/job/create/${fixer}/${title}/${description}/${henchmenCount}/${reward}`
	)
	if (response.status === 200) {
		console.log('\nJob created ')
		dispatch(getJobs())
	}
}

export const getJobDone = (mercId, jobId) => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.put(`http://localhost:8081/gettingJobDone/${mercId}/${jobId}`)
		.then((response) => {
			if (response.status === 200) {
				console.log('\nJob get done ')
				dispatch(getJobs())
				dispatch(getMercs())
				dispatch(getGuns())
				dispatch(setShowToast(true))
				dispatch(setToast(response.data.status))
				console.log(response.data.status.status)
			}
		})
		.catch((err) => {
			dispatch(getJobs())
			dispatch(getMercs())
			dispatch(setShowToast(true))
			dispatch(setToast(err.message))
			alertMessage(err.message)
		})
}

export const editMerc = (mercId, name, age) => async (dispatch) => {
	console.log('Calling API')
	await Axios.put(`http://localhost:8081/merc/update/${mercId}/${name}/${age}`)
		.then((response) => {
			if (response.status === 200) {
				console.log('\nEdit success')
				dispatch(getMercs())
				dispatch(setShowToast(true))
				dispatch(setToast('Edit success'))
			}
		})
		.catch((err) => {
			dispatch(getMercs())
			dispatch(setShowToast(true))
			dispatch(setToast(err.response.data))
			alertMessage(err.message)
		})
}

const alertMessage = (msg) => {
	if (msg === 'Network Error') alert('Api is not running')
}
