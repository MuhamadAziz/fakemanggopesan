// MAIN REDUCERS UNTUK MENYATUKAN SEMUA REDUCER
import { combineReducers } from 'redux'
// Student reducer yaitu ngambil dari student
import studentReducer from './studentReducer'

export default combineReducers({
    student: studentReducer
})