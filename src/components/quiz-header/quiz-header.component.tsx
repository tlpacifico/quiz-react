import React from 'react';
import './quiz-header.styles.scss'

const QuizHeader = () => (
    <div className="header">
        <div className="header-container">
            <div className="title-container">
                <span>QUIZ XPTO</span>
            </div>
            <div className="counter-container">
                <span>00:30:00</span>
            </div>
        </div>
        <div className="navigation-container">
             <div className="navigation-item">
                 1
             </div>
             <div className="navigation-item text-center">
                 De
             </div>
             <div className="navigation-item text-right">
                 30
             </div>
        </div>
    </div>

)

export default QuizHeader;