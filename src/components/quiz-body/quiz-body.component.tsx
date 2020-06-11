import React, { FunctionComponent, ChangeEvent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Question, SaverAnswerPayload } from '../../store/quiz/types';
import { RadioGroup, FormControlLabel, Radio, makeStyles, Box } from '@material-ui/core';


const useStyles = makeStyles({
    main: {
        flex: '1 0 auto',
        display: 'flex',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        marginBottom: '20px',
    },
    questionDescription: {
        fontSize: '20px',
        fontWeight: 'bolder',
        color: '#3f51b5'
    }
});


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
      const classes = useStyles();
    return (
        <Box className={classes.main}>
            <Box flex="0 0 150px">
                <List component="nav">
                    {questions.map(q =>
                        <ListItemLink key={q.id}>
                            <ListItemText key={q.id} onClick={() => loadQuestion(q.id)} primary={`Question - ${q.id}`} />
                        </ListItemLink>)}
                </List>
            </Box>
            <Box flexDirection="column" flex="1 1 auto" paddingLeft="10px">
                <pre className={classes.questionDescription}> 
                    {question.description}
                </pre>
                <RadioGroup aria-label="quiz" name="quiz" value={answeredId} onChange={handleRadioChange}>
                    {
                        question.answers?.map(answer => <FormControlLabel key={answer.id} value={answer.id} control={<Radio />} label={answer.description} />)
                    }
                </RadioGroup>
            </Box>
        </Box>
    );
}

export default QuizBody;