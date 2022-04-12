import { combineReducers } from 'redux';
import randomQuoteReducer from './Random'
import searchReducer from './Search'


export default combineReducers({
    randomState:randomQuoteReducer,
    searchState:searchReducer
})