import { action } from 'typesafe-actions';
import * as quizTypes from './types';

export const loadInitialState = ()  => action(quizTypes.QuizActionsType.LOAD_INITIAL_STATE);
export const loadQuestion = (payload: quizTypes.LoadQuestionPayload) => action(quizTypes.QuizActionsType.NEXT_QUESTION, payload);

export const saveAnswer = (payload: quizTypes.SaverAnswerPayload) => action(quizTypes.QuizActionsType.SAVE_ANSWER, payload);
