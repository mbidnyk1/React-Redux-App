import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchTrivia } from '../store/actions/triviaActions';

const TriviaList = props => {

    useEffect(() => {
        props.fetchTrivia();
    }, []);

    return (
        <div>
            <h1>Trivia Time</h1>
            {props.isFetching && (
                <Loader type="Puff" color="00BFFF" height={100} width={100} />
            )}
            {props.triviaData.question && <h3>'{props.triviaData.question}'</h3> }
            {props.error && <p className='error'>{props.error}</p>}
            <button onClick={props.fetchTrivia}>Fetch a new Trivia Question</button>    
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        triviaData:state.trivia.triviaData,
        // category: state.trivia.category,
        // difficulty: state.trivia.difficulty,
        // question: state.trivia.question,
        // correct_answer: state.trivia.correct_answer,
        // incorrect_answers: state.trivia.incorrect,
        isFetching: state.trivia.isFetching,
        error: state.trivia.error
    }
}

export default connect(
    mapStateToProps,
    { fetchTrivia }
)(TriviaList);