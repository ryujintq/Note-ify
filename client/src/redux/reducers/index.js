import authReducer from './auth'
import notesReducer from './notes'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    auth: authReducer,
    notes: notesReducer
})

export default allReducers