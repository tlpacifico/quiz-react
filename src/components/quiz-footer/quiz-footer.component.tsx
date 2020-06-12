import React, { FunctionComponent } from 'react';
import { Button, makeStyles, Box } from '@material-ui/core';
import { LoadQuestionPayload } from '../../store/quiz/types';


const useStyles = makeStyles({
    footer: {
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        marginBottom: '20px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px 0 20px',
    },
    navigation: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});



type FooterProps = {
    loadQuestion: (payload: LoadQuestionPayload) => void;
    previousIdQuestion: number | null;
    nextIdQuestion: number | null;
}


const QuizFooter: FunctionComponent<FooterProps> = ({ loadQuestion, previousIdQuestion, nextIdQuestion }) => {
 const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Box className={classes.navigation}>
                <Box flex="40">
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!previousIdQuestion}
                        onClick={() => loadQuestion({questionId: previousIdQuestion ? previousIdQuestion : 0} )}>Previous</Button>
                </Box>
                <Box flex="40" textAlign="right">
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!nextIdQuestion}
                        onClick={() => loadQuestion({questionId: nextIdQuestion ? nextIdQuestion : 0})}>Next</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default QuizFooter;