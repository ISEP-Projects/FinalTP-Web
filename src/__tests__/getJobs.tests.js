import * as actions from '../actions'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import configureMockStore from 'redux-mock-store'
const middleware = [thunk]
const mockStore = configureMockStore(middleware)
const initialState = {
	isLoading: true,
	errMess: null,
	jobs: [],
	showForm: false,
}
describe('Testing getJobs() in actions', () => {
	let store
	beforeEach(() => {
		moxios.install()
		store = mockStore(initialState)
	})
	afterEach(() => {
		moxios.uninstall()
	})

	test('getJobs request when database available', () => {
		moxios.wait(function () {
			let request = moxios.requests.mostRecent()
			request.respondWith({
				data: [{}],
				status: 200,
			})
		})
		const expectedActions = [
			{
				payload: undefined,
				type: 'SAVE_JOBS',
			},
		]

		return store.dispatch(actions.getJobs()).then(() => {
			const actualAction = store.getActions()
			expect(actualAction).toEqual(expectedActions)
		})
	})

	test('getJobs request when database is unavailable', () => {
		moxios.wait(function () {
			let request = moxios.requests.mostRecent()
			request.respondWith({
				data: [{}],
				status: 500,
			})
		})
		const expectedActions = [
			{
				payload: 'Request failed with status code 500',
				type: 'JOBS_FAILED',
			},
		]

		return store.dispatch(actions.getJobs()).then(() => {
			const actualAction = store.getActions()
			expect(actualAction).toEqual(expectedActions)
		})
	})
})
