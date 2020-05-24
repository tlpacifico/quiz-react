import { action } from 'typesafe-actions';
import * as quizTypes from './types';

//export const LoadInitialState = (): quizTypes.QuizActionsType.LOAD_INITIAL_STATE => (quizTypes.QuizActionsType.LOAD_INITIAL_STATE);
export const loadInitialState = ()  => action(quizTypes.QuizActionsType.LOAD_INITIAL_STATE);
export const loadQuestion = (questionId: number) => action(quizTypes.QuizActionsType.NEXT_QUESTION, {questionId : questionId });

export const saveAnswer = (payload: quizTypes.SaverAnswerPayload) => action(quizTypes.QuizActionsType.SAVE_ANSWER, payload);
