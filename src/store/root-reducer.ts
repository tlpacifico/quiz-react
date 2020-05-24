import { combineReducers } from 'redux';
import quizReducer from './quiz/reducer';
import { GlobalState } from './global-state';

const rootReducer = combineReducers<GlobalState>({
    quiz: quizReducer
});

export default rootReducer;