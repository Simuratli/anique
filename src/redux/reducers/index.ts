import { combineReducers } from 'redux';
import randomQuoteReducer from './Random'


export default combineReducers({
    randomState:randomQuoteReducer,
})