import React, { FunctionComponent } from 'react';
import './quiz-footer.styles.scss';
import { Button } from '@material-ui/core';

type FooterProps = {
    loadQuestion: (questionId: number) => void;
    previousIdQuestion: number | null;
    nextIdQuestion: number | null;
}


const QuizFooter: FunctionComponent<FooterProps> = ({ loadQuestion, previousIdQuestion, nextIdQuestion }) => (
    <footer>
        <div className="navigation-container">
            <div className="navigation-item">
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!previousIdQuestion}
                    onClick={() => loadQuestion(previousIdQuestion ? previousIdQuestion : 0)}>Previous</Button>
            </div>
            <div className="navigation-item text-right">
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!nextIdQuestion}
                    onClick={() => loadQuestion(nextIdQuestion ? nextIdQuestion : 0)}>Next</Button>
            </div>
        </div>
    </footer>
);

export default QuizFooter;