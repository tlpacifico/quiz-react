
/*
    Actions types
*/
export enum QuizActionsType {
    LOAD_INITIAL_STATE = 'LOAD_INITIAL_STATE',
    NEXT_QUESTION = 'NEXT_QUESTION',
    SAVE_ANSWER = 'SAVE_ANSWER'
}

/*
    Reducer types
*/

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

export interface QuizState {
    questions: { [id: number]: Question};
    currentQuestionId: number;
    status: BranchStatus;
}

export interface BranchStatus {
    loaded:boolean
    loading: boolean;
    error: boolean;
}

/*
    Payload types
*/

export interface SaverAnswerPayload {
    questionId: number;
    anwserId: number;
}