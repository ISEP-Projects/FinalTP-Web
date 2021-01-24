import { mercsReducer } from '../reducers/mercsReducer'

describe('Mercs Reducer Testing', () => {
	test('Default values ', () => {
		expect(mercsReducer(undefined, {})).toEqual({
			isLoading: true,
			errMess: null,
			mercs: [],
			showForm: false,
		})
	})

	test('Save mercs', () => {
		const mercs = 'Morgan Blackhand'
		const action = {
			type: 'SAVE_MERCS',
			payload: mercs,
		}

		expect(mercsReducer({}, action)).toEqual({
			isLoading: false,
			errMess: null,
			mercs: mercs,
		})
	})

	test('Mercs loading', () => {
		const action = {
			type: 'MERCS_LOADING',
		}

		expect(mercsReducer({}, action)).toEqual({
			isLoading: true,
			errMess: null,
			mercs: [],
		})
	})

	test('Mercs failed', () => {
		const errMess = 'mercs failed'
		const action = {
			type: 'MERCS_FAILED',
			payload: errMess,
		}

		expect(mercsReducer({}, action)).toEqual({
			isLoading: false,
			errMess: errMess,
		})
	})

	test('Show add form', () => {
		const show = true
		const action = {
			type: 'SHOW_ADD_MERC_FORM',
			payload: show,
		}

		expect(mercsReducer({}, action)).toEqual({
			showForm: show,
		})
	})
})
