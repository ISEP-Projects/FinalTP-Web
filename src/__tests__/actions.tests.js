import * as actions from '../actions'
import * as types from '../actions'

describe('Testing actions', () => {
	test('Mecs loading', () => {
		const expectedAction = {
			type: types.MERCS_LOADING,
		}
		expect(actions.mercsLoading()).toEqual(expectedAction)
	})

	test('Guns Loading', () => {
		const expectedAction = {
			type: types.GUNS_LOADING,
		}
		expect(actions.gunsLoading()).toEqual(expectedAction)
	})

	test('Jobs Loading', () => {
		const expectedAction = {
			type: types.JOBS_LOADING,
		}
		expect(actions.jobsLoading()).toEqual(expectedAction)
	})

	test('Save mercs', () => {
		const mercs = 'testing'
		const expectedAction = {
			type: types.SAVE_MERCS,
			payload: mercs,
		}
		expect(actions.saveMercs(mercs)).toEqual(expectedAction)
	})

	test('Mercs failed', () => {
		const errmess = 'Mercs failed'
		const expectedAction = {
			type: types.MERCS_FAILED,
			payload: errmess,
		}
		expect(actions.mercsFailed(errmess)).toEqual(expectedAction)
	})

	test('Guns failed', () => {
		const errmess = 'Guns failed'
		const expectedAction = {
			type: types.GUNS_FAILED,
			payload: errmess,
		}
		expect(actions.gunsFailed(errmess)).toEqual(expectedAction)
	})

	test('Jobs failed', () => {
		const errmess = 'Jobs failed'
		const expectedAction = {
			type: types.JOBS_FAILED,
			payload: errmess,
		}
		expect(actions.jobsFailed(errmess)).toEqual(expectedAction)
	})

	test('Add merc', () => {
		const merc = 'Add merc'
		const expectedAction = {
			type: types.ADD_MERC,
			payload: merc,
		}
		expect(actions.addMerc(merc)).toEqual(expectedAction)
	})

	test('Modify merc', () => {
		const merc = 'Modify merc'
		const expectedAction = {
			type: types.MODIFY_MERC,
			payload: merc,
		}
		expect(actions.modifyMerc(merc)).toEqual(expectedAction)
	})

	test('Save guns', () => {
		const guns = 'testing'
		const expectedAction = {
			type: types.SAVE_GUNS,
			payload: guns,
		}
		expect(actions.saveGuns(guns)).toEqual(expectedAction)
	})

	test('Save jobs', () => {
		const jobs = 'testing'
		const expectedAction = {
			type: types.SAVE_JOBS,
			payload: jobs,
		}
		expect(actions.saveJobs(jobs)).toEqual(expectedAction)
	})

	test('Show add job form', () => {
		const bool = true
		const expectedAction = {
			type: types.SHOW_ADD_JOB_FORM,
			payload: bool,
		}
		expect(actions.showAddJobForm(bool)).toEqual(expectedAction)
	})

	test('Show add merc form', () => {
		const bool = true
		const expectedAction = {
			type: types.SHOW_ADD_MERC_FORM,
			payload: bool,
		}
		expect(actions.showAddMercForm(bool)).toEqual(expectedAction)
	})
})
