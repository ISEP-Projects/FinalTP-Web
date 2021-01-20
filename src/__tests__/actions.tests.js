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
})
