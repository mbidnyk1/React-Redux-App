import axios from 'axios';

export const fetchTrivia = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_TRIVIA_START'});
        axios
            .get('https://opentdb.com/api.php?amount=1')
            .then(res => {
                
                dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res.data.results[0]})
                console.log(res.data.results[0])
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_QUOTE_FAILURE',
                    payload: `Error ${err.response.status}: ${err.response.data}`
                });
            });
    };
};

