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

export const deleteJob = (job) => ({
	type: DELETE_JOB,
	payload: job,
})

export const getGuns = () => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.get('http://localhost:8081/guns')
		.then(
			(response) => {
				if (response.status === 200) {
					return response
				} else {
					const error = new Error(
						'Error ' + response.status + ': ' + response.statusText
					)
					error.response = response
					throw error
				}
			},
			(error) => {
				throw error
			}
		)
		.then((response) => {
			console.log('\nGun Data received: ')
			dispatch(saveGuns(response.data))
		})
		.catch((error) => {
			console.log('\nGun Data not received: ' + error.message)
			dispatch(gunsFailed(error.message))
		})
}

export const getMercs = () => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.get('http://localhost:8081/merc/Allmercs')
		.then(
			(response) => {
				if (response.status === 200) {
					return response
				} else {
					const error = new Error(
						'Error ' + response.status + ': ' + response.statusText
					)
					error.response = response
					throw error
				}
			},
			(error) => {
				throw error
			}
		)
		.then((response) => {
			console.log('\nMercs Data received: ')
			dispatch(saveMercs(response.data))
		})
		.catch((error) => {
			console.log('\nMerc Data not received: ' + error.message)
			dispatch(mercsFailed(error.message))
		})
}

export const getJobs = () => async (dispatch, getState) => {
	console.log('Calling API')
	await Axios.get('http://localhost:8081/job/Alljobs')
		.then(
			(response) => {
				if (response.status === 200) {
					return response
				} else {
					const error = new Error(
						'Error ' + response.status + ': ' + response.statusText
					)
					error.response = response
					throw error
				}
			},
			(error) => {
				throw error
			}
		)
		.then((response) => {
			console.log('\nJob Data received: ')
			dispatch(saveJobs(response.data))
		})
		.catch((error) => {
			console.log('\nJob Data not received: ' + error.message)
			dispatch(jobsFailed(error.message))
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

//API Route not implemented yet!
export const deleteMerc = (id) => async (dispatch, getState) => {
	console.log('Calling API')
	const response = await Axios.post(`http://localhost:8081/merc/delete/${id}`)
	if (response.status === 200) {
		console.log('\nMerc deleted ')
		//get Updated mercsList
		dispatch(getMercs())
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
