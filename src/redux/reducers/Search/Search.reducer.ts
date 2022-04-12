import { SEARCH_TEXT, SET_SEARCH_RESPONSE } from '../../constants/search'

const initialState: any = {
    data: [],
    text: ""
}

const randomQuoteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEARCH_TEXT:
            return {
                ...state,
                text: action.payload
            }
        case SET_SEARCH_RESPONSE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return { ...state }
    }
}

export default randomQuoteReducer