import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Container } from '@material-ui/core';

import { GlobalState } from '../../store/global-state';
import { getCurrentQuestion, selectGetQuestions, selectGetTotalOfQuestions } from '../../store/quiz/selectors';
import * as quizzTypes from '../../store/quiz/types';

import QuizHeader from '../quiz-header/quiz-header.component';
import QuizFooter from '../quiz-footer/quiz-footer.component';
import * as quizActions from '../../store/quiz/actions';
import QuizBody from '../quiz-body/quiz-body.component';

interface StateProps {
    currentQuestion: quizzTypes.Question;
    questions: quizzTypes.Question[]
    totalOfQuestions: number;
}

interface DispatchProps {
    loadInitialState(): void;
    loadQuestion(payload: quizzTypes.LoadQuestionPayload): void;
    saveAnswer(payload: quizzTypes.SaverAnswerPayload): void;
}

type Props = StateProps & DispatchProps;

class QuizApp extends Component<Props>{

    componentDidMount(){
        const  { loadInitialState } = this.props;

        loadInitialState();
    }
    
    render() {
        const { currentQuestion, questions, totalOfQuestions } = this.props;

        return (
          <Container maxWidth="md">    
            <QuizHeader totalOfQuestion={totalOfQuestions} currentQuestion={currentQuestion.id} timerQuiz={30} />
            <QuizBody
                 key={currentQuestion.id}
                 question={ currentQuestion }
                 questions={questions}
                 loadQuestion={this.props.loadQuestion}
                 saveAnswer={this.props.saveAnswer} />
            <QuizFooter 
                loadQuestion={this.props.loadQuestion}             
                previousIdQuestion={currentQuestion.previousIdQuestion} 
                nextIdQuestion={currentQuestion.nextIdQuestion} />
          </Container>
        );
      }
    }
    
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(quizActions, dispatch);

const mapStateToProps = createStructuredSelector<GlobalState, StateProps>({
    currentQuestion: getCurrentQuestion,
    questions: selectGetQuestions,
    totalOfQuestions: selectGetTotalOfQuestions
})

export default connect(mapStateToProps, mapDispatchToProps)(QuizApp);