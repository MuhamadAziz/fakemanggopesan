import { 
    createStore, 
    applyMiddleware, 
    compose 
} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}

// Middleware diambil dari redux thunk, kenapa array karena thukunya banyak
const middleWare = [thunk]

// compose memasukan 
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleWare), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store