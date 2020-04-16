const initialState = {
    triviaData: {},
    isFetching: false,
        error: ''
}

export const triviaReducer = (state = initialState, action) => {
    console.log('question',state.triviaData)
    console.log('payload',action.payload)
    switch (action.type) {
        case 'FETCH_TRIVIA_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_TRIVIA_SUCCESS':
            return {
                ...state,
                 triviaData: [...state.triviaData, action.payload],
                isFetching: false,
                error:''
            };
        case 'FETCH_QUOTE_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}