import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchTrivia} from '../store/actions/triviaActions';
import TriviaAnswers from './TriviaAnswers';
import  shuffle from 'lodash.shuffle';

const TriviaList = props => {


    useEffect(() => {
        props.fetchTrivia();
    },[]);

    // function shuffleAnswers(props){
    //     props.triviaAnswers && shuffle(props.triviaAnswers) 
    // }
    console.log('trivia Answers!!',props.triviaAnswers)

    const shuffled = shuffle(props.triviaAnswers)
    console.log({shuffled})
    return (
        <div>
            <h1>Trivia Time</h1>
            {props.isFetching && (
                <Loader type="Puff" color="00BFFF" height={100} width={100} />
            )}
            {props.triviaData.question && <h3>'{props.triviaData.question}'</h3> }
            
            {/* {props.triviaData.incorrect_answers && props.triviaData.incorrect_answers.map((incorrectAnswer,index) => {
                return <TriviaAnswers key={index} incorrectAnswer={incorrectAnswer} />
                })} */}
                
                {props.triviaAnswers && shuffled.map((answers, index) => {
                    return <TriviaAnswers key={index} answers={answers} />
                })}
                
            {props.error && <p className='error'>{props.error}</p>}
            <button onClick={ props.fetchTrivia}>Fetch a new Trivia Question</button>    
        </div>
    )
}

const mapStateToProps = state => {
    console.log('state',state);
    console.log('triviaData',state.trivia.triviaData.incorrect_answers)
    console.log('trivia Answers',state.trivia.triviaAnswers)
    return {
        triviaData:state.trivia.triviaData,
        triviaAnswers:state.trivia.triviaAnswers,
        isFetching: state.trivia.isFetching,
        error: state.trivia.error
    }
}

export default connect(
    mapStateToProps,
    { fetchTrivia }
)(TriviaList);