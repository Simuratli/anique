import { SEARCH_TEXT, SET_SEARCH_RESPONSE } from '../constants/search'
import { RandomQuoteState } from '../reducers/Random/radom.types'

export const setSearchText = (payload: string) => ({
    type: SEARCH_TEXT,
    payload
})

export const setSearchResponse = (payload: RandomQuoteState[]) => ({
    type: SET_SEARCH_RESPONSE,
    payload
})

