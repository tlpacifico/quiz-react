import React, { FunctionComponent, ChangeEvent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './quiz-body.styles.scss';
import { Question, SaverAnswerPayload } from '../../store/quiz/types';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';


const ListItemLink = (props: any) => (
    <ListItem button component="a" {...props} />
);


type QuestionProps = {
    question: Question,
    questions: Question[]
    loadQuestion: (questionId: number) => void;
    saveAnswer(payload: SaverAnswerPayload): void;
}


const QuizBody: FunctionComponent<QuestionProps> = ({ question, questions, loadQuestion, saveAnswer }) => {
    const [answeredId, setValue] = React.useState(question.answeredId);

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        
        const answeredId = Number(event.target.value);
        setValue(answeredId) ;
        saveAnswer({questionId: question.id, anwserId: answeredId });
      };

    return (
        <main>
            <aside>
                <List component="nav">
                    {questions.map(q =>
                        <ListItemLink key={q.id}>
                            <ListItemText key={q.id} onClick={() => loadQuestion(q.id)} primary={`Question - ${q.id}`} />
                        </ListItemLink>)}
                </List>
            </aside>
            <section className="content">
                <pre className="question-description"> 
                    {question.description}
                </pre>
                <RadioGroup aria-label="quiz" name="quiz" value={answeredId} onChange={handleRadioChange}>
                    {
                        question.answers?.map(answer => <FormControlLabel key={answer.id} value={answer.id} control={<Radio />} label={answer.description} />)
                    }
                </RadioGroup>
            </section>
        </main>
    );
}

export default QuizBody;