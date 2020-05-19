import React from 'react';
import './quiz-footer.styles.scss';
import { Button } from '@material-ui/core';


const QuizFooter = () => (
    <footer>
    <div className="navigation-container">
             <div className="navigation-item">
             <Button>Previous</Button>
             </div>         
             <div className="navigation-item text-right">
             <Button>Next</Button>
             </div>
        </div>
    </footer>
);

export default QuizFooter;