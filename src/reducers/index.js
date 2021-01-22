import { combineReducers } from 'redux'
import { mercsReducer } from './mercsReducer'
import { gunsReducer } from './gunsReducer'
import { jobsReducer } from './jobsReducer'
import { toastReducer } from './toastReducer'

const allReducers = combineReducers({
	mercs: mercsReducer,
	guns: gunsReducer,
	jobs: jobsReducer,
	toast: toastReducer
})

export default allReducers
