import { GET_RANDOM_QUOTE } from '../../constants/random'

const initialState: any = {
    anime: "Natsume's Book of Friends",
    character: "Takashi Natsume",
    quote: "What's been troubling me lately are these small farewells that make me feel a bit lonely. Brief meetings and farewells. I want to treasure each and every moment."
}

const randomQuoteReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_RANDOM_QUOTE:
            return {
                ...state,
                anime: action.payload.anime,
                character: action.payload.character,
                quote: action.payload.quote,
            }
        default:
            return { ...state }
    }
}

export default randomQuoteReducer