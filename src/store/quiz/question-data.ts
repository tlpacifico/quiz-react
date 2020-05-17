import { Question } from "./types";

export const data:  { [id: number]: Question} = {
    1 : {
        id: 1,
        description: "Who created React?",
        answers:[
                {id: 1, description: "It's a framework made by google."},
                {id: 2, description: "It's a library made by facebook"},
                {id: 3, description: "It's a framework from google."},
                {id: 4, description: "It's a framework from google."}
            ],
        answeredId: null,
        nextIdQuestion: 2,
        previousIdQuestion: null
    },
    2 : {
        id: 2,
        description: "What is the major purpose of React?",
        answers:[
                {id: 5, description: "Render the Dom"},
                {id: 6, description: "Retrive data from back end."},
                {id: 7, description: "Create a rest api"}
            ],
        answeredId: null,
        nextIdQuestion: 3,
        previousIdQuestion: 1
    },
    3 : {
        id: 3,
        description: "What's name of design patter help us keep application state?",
        answers:[
                {id: 8, description: "Redux"},
                {id: 9, description: "Single Page Application"},
                {id: 10, description: "MVVM"},
                {id: 11, description: "Angular"}
            ],
        answeredId: null,
        nextIdQuestion: null,
        previousIdQuestion: 2
    }
};

export default data;