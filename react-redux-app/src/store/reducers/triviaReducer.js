import  {FETCH_TRIVIA_START,FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_FAILURE, SET_TRIVIA_ANSWERS} from '../actions/actionTypes'


const initialState = {
    triviaData: {},
    triviaAnswers: [],
    isFetching: false,
        error: ''
}

export const triviaReducer = (state = initialState, action) => {
    console.log('triviaData Question',state.triviaData)
    console.log('payload',action.payload)
    switch (action.type) {
        case FETCH_TRIVIA_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_TRIVIA_SUCCESS:
            return {
                ...state,
                 triviaData: action.payload,
                isFetching: false,
                error:''
            };
        case FETCH_TRIVIA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case SET_TRIVIA_ANSWERS:
            return {
            ...state,
            triviaAnswers: [...state.triviaData.incorrect_answers, state.triviaData.correct_answer]
            };
        default:
            return state;
    }
}