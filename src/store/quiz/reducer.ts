import { Reducer } from 'redux';
import * as quizTypes from './types';
import data from './question-data';


const INITIAL_STATE: quizTypes.QuizState = {
    questions: data,
    currentQuestionId: 1
};

const quizReducer: Reducer<quizTypes.QuizState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case quizTypes.QuizActionsType.LOAD_INITIAL_STATE:
            return state;
        case quizTypes.QuizActionsType.NEXT_QUESTION: {
            const payload = action.payload as quizTypes.LoadQuestionPayload;
            return {
                ...state,
                currentQuestionId: payload.questionId
            };
        }
        case quizTypes.QuizActionsType.SAVE_ANSWER: {
            const payload = action.payload as quizTypes.SaverAnswerPayload;
            const question = state.questions[payload.questionId];
             return {
                ...state,
                questions: {
                    ...state.questions,
                    [question.id]: {
                        ...question,
                        answeredId: payload.anwserId
                    }
                }
            };
        }
        default:
            return state
    }
};

export default quizReducer;