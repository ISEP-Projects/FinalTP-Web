import { combineReducers } from 'redux'
import { mercsReducer } from './mercsReducer'
import { gunsReducer } from './gunsReducer'
import { jobsReducer } from './jobsReducer'

const allReducers = combineReducers({
	mercs: mercsReducer,
	guns: gunsReducer,
	jobs: jobsReducer,
})

export default allReducers
