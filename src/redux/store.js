import { createStore, combineReducers } from 'redux'
import { armors } from './reducers'

const reducers = {
    armors,
}

const rootReducer = combineReducers(reducers)

export const configureStore = () => createStore(rootReducer)

