
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'

import thunk from 'redux-thunk'

import pokeReducer from './pokeDucks'

import {composeWithDevTools} from 'redux-devtools-extension'



const rootReducer = combineReducers({
    pokemones: pokeReducer     
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}
