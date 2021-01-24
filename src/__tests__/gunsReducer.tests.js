import { gunsReducer } from '../reducers/gunsReducer'

describe('Jobs Reducer Testing', () => {
	test('Defualt values', () => {
		expect(gunsReducer(undefined, {})).toEqual({
			isLoading: true,
			errMess: null,
			gunsList: [],
		})
	})

	test('Save guns', () => {
		const guns = 'Militech M-10AF Lexington'
		const action = {
			type: 'SAVE_GUNS',
			payload: guns,
		}

		expect(gunsReducer({}, action)).toEqual({
			isLoading: false,
			errMess: null,
			gunsList: guns,
		})
	})

	test('Gund loading', () => {
		const action = {
			type: 'GUNS_LOADING',
		}

		expect(gunsReducer({}, action)).toEqual({
			isLoading: true,
			errMess: null,
			gunsList: [],
		})
	})

	test('Guns failed', () => {
		const errMess = 'guns failed'
		const action = {
			type: 'GUNS_FAILED',
			payload: errMess,
		}

		expect(gunsReducer({}, action)).toEqual({
			isLoading: false,
			errMess: errMess,
		})
	})
})
