import { Reducer } from 'redux';
import { QuestionsState, QuizActionsType } from './types';
import data from './question-data';


const INITIAL_STATE: QuestionsState = {
    questions: data,
    currentQuestionId: 1,
    error: false,
    loading: false,
};

const quizReducer: Reducer<QuestionsState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case QuizActionsType.LOAD_INITIAL_STATE:
            return state;
        case QuizActionsType.NEXT_QUESTION:
            return {
                ...state,
                currentQuestionId: action.payload.questionId
            };
        case QuizActionsType.SAVE_ANSWER:
            const question = state.questions[action.payload.questionId];
             return {
                ...state,
                questions: {
                    ...state.questions,
                    [question.id]: {
                        ...question,
                        answeredId: action.payload.questionId
                    }
                }
            };
        default:
            return state
    }
};

export default quizReducer;