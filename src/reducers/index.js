import { combineReducers } from 'redux'
import { formsReducer } from './formsReducer'
import { mercsReducer } from './mercsReducer'
import { gunsReducer } from './gunsReducer'
import { jobsReducer } from './jobsReducer'

const allReducers = combineReducers({
	mercs: mercsReducer,
	guns: gunsReducer,
	jobs: jobsReducer,
	forms: formsReducer,
})

export default allReducers
