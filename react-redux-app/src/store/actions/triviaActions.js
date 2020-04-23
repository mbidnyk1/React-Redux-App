import axios from 'axios';

export const fetchTrivia = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_TRIVIA_START'});
        axios
            .get('https://opentdb.com/api.php?amount=1')
            .then(res => {
                
                dispatch({ type: 'FETCH_TRIVIA_SUCCESS', payload: res.data.results[0]})
                console.log('res data',res.data.results[0])
            }).then( () => {
                return dispatch({type: 'SET_TRIVIA_ANSWERS'})
        
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_TRIVIA_FAILURE',
                    payload: `Error ${err.response.status}: ${err.response.data}`
                });
            });
    };
};

// export const setTriviaAnswers = () => {
//     return dispatch => {
//         dispatch({type: 'SET_TRIVIA_ANSWERS'})
//     }
// }

