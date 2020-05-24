import React from 'react';
import moment from 'moment';
import './quiz-header.styles.scss'

interface OwnProps {
    currentQuestion: number;
    totalOfQuestion: number;
    timerQuiz: number;
}

class QuizHeader extends React.Component<OwnProps, { timerOut: string }>{
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            timerOut: ''
        }
    }

    componentDidMount() {

        let startTime = moment(new Date());
        const endTime = moment().add({ minutes: 40 });
        setInterval(() => {
            startTime = moment(new Date());
            var duration = moment.duration(endTime.diff(startTime));
            var hours = Math.round(duration.asHours()) > 1 ? Math.round(duration.asHours()) : 0;
            var minutes = Math.round(duration.asMinutes()) - hours * 60;
            const timetOut = hours + "h " + minutes + "m ";
            this.setState({ timerOut: timetOut });
        }, 1000);
    }
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="title-container">
                        <span>QUIZ XPTO</span>
                    </div>
                    <div className="counter-container">
                        <span>{this.state.timerOut}</span>
                    </div>
                </div>
                <div className="navigation-container">
                    <div className="navigation-item">
                        {this.props.currentQuestion}
                    </div>
                    <div className="navigation-item text-center">
                        De
                 </div>
                    <div className="navigation-item text-right">
                        {this.props.totalOfQuestion}
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizHeader;