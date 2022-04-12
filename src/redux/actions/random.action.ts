import { GET_RANDOM_QUOTE } from '../constants/random'
import { RandomQuoteState } from '../reducers/Random/radom.types'

export const setRandomData = (payload: RandomQuoteState) => ({
    type: GET_RANDOM_QUOTE,
    payload
})