import { createSelector } from 'reselect';
import { GlobalState } from '../global-state';

const quizState = (state: GlobalState) => state.quiz;

const selectCurrentQuestionId = createSelector(
    [quizState],
    state => state.currentQuestionId
);

const selectQuestions = createSelector(
    [quizState],
    state => state.questions
);

export const getCurrentQuestion = createSelector(
    [selectQuestions, selectCurrentQuestionId],
    (questions, currentQuestionId) => questions[currentQuestionId]
)

export const selectGetQuestions = createSelector(
    [selectQuestions, selectCurrentQuestionId],
    (questions, currentQuestionId) => {
       const questionIds = Object.keys(questions);
       return questionIds
            .filter(id => Number(id) > currentQuestionId)
            .map(id => questions[Number(id)]);
    }
)

export const selectGetTotalOfQuestions = createSelector(
    [selectQuestions],
    questions =>  Object.keys(questions).length
)