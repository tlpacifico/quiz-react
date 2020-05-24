import React from 'react';
import moment from 'moment';
import './quiz-header.styles.scss'
import { Box, LinearProgress } from '@material-ui/core';

interface OwnProps {
    currentQuestion: number;
    totalOfQuestion: number;
    timerQuiz: number;
}

class QuizHeader extends React.Component<OwnProps, { timerOut: string | null }>{
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            timerOut: ' '
        }
    }

    componentDidMount() {

        let startTime = moment(new Date());
        const endTime = moment().add({ minutes: this.props.timerQuiz });
        setInterval(() => {
            startTime = moment(new Date());
            var duration = moment.duration(endTime.diff(startTime));
            var hours = Math.round(duration.asHours()) > 1 ? Math.round(duration.asHours()) : 0;
            var minutes = Math.round(duration.asMinutes()) - hours * 60;
            const timetOut = minutes > 0 ? hours + "h " + minutes + "m " : null;
            this.setState({ timerOut: timetOut });
        }, 1000);
    }
    render() {
        const completed = (this.props.currentQuestion*100)/this.props.totalOfQuestion;
        return (
            <Box  bgcolor="#f5f5f5" border="border-radius: 4px" marginBottom="20px" p={1}>
                <div className="header-container">
                    <div className="title-container">
                        <span>QUIZ XPTO</span>
                    </div>
                    <div className="counter-container">
        <span> {this.state.timerOut ? `Time limit: ${this.state.timerOut}` : 'Time is over!' }</span>
                    </div>
                </div>
                <div className="navigation-container">
                    <div className="header-navigation-item">
                        <LinearProgress variant="determinate" value={completed} />
                    </div>
                </div>
            </Box>
        )
    }
}

export default QuizHeader;