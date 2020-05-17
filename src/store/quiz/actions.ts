import { action } from 'typesafe-actions';
import * as quizTypes from './types';

//export const LoadInitialState = (): quizTypes.QuizActionsType.LOAD_INITIAL_STATE => (quizTypes.QuizActionsType.LOAD_INITIAL_STATE);
export const loadInitialState = ()  => action(quizTypes.QuizActionsType.LOAD_INITIAL_STATE);
export const loadQuestion = (questionId: number) => action(quizTypes.QuizActionsType.NEXT_QUESTION);
export const saveAnswer = (questionId: number, answerId: number) => action(quizTypes.QuizActionsType.SAVE_ANSWER);
