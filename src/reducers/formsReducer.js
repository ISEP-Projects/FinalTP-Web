import * as actions from '../actions'

const initialState = {
	addNewJobForm: {
		values: {
			fixer: '',
			title: '',
			description: '',
			henchmenCount: 0,
			reward: 0,
		},
		errors: {
			fixer: '',
			title: '',
			description: '',
			henchmenCount: '',
			reward: '',
		},
	},
}

const setErrors = (fixer, title, description, henchmenCount, reward) => {
	let errors = {
		fixer: '',
		title: '',
		description: '',
		henchmenCount: '',
		reward: '',
	}
	if (!fixer && fixer.length === 0) {
		errors.fixer = 'Fixer name is required'
	}
	if (!title && title.length === 0) {
		errors.title = 'Title is required'
	}
	if (!description && description.length === 0) {
		errors.description = 'Description is required'
	}
	if (!henchmenCount && henchmenCount < 0) {
		errors.henchmenCount = 'Negative number of henchmen is not possible'
	}
	if (!reward && reward <= 0) {
		errors.reward = 'Reward is mandatory you STINGY fixer!'
	}
	return errors
}

export const formsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_JOB:
			const {
				fixer,
				title,
				description,
				henchmenCount,
				reward,
			} = action.payload
			const values = {
				fixer,
				title,
				description,
				henchmenCount,
				reward,
			}
			const errors = setErrors(fixer, title, description, henchmenCount, reward)

			return {
				addNewJobForm: {
					values,
					errors,
				},
			}
		default:
			console.log('Default')
			console.log(state)
			return state
	}
}
