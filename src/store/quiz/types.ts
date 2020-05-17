export enum QuizActionsType {
    LOAD_INITIAL_STATE = 'LOAD_INITIAL_STATE',
    NEXT_QUESTION = 'NEXT_QUESTION',
    SAVE_ANSWER = 'SAVE_ANSWER'
}

export interface Question {
    id: number;
    description: string;
    previousIdQuestion: number | null;
    nextIdQuestion: number | null;
    answers: Answer[] | null;
    answeredId: number| null;
}

export interface Answer {
    id: number;
    description: string;
}

export interface QuestionsState {
    questions: { [id: number]: Question};
    currentQuestionId: number | null;
    loading: boolean;
    error: boolean;
}
