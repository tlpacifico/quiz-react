import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    header: {
        display: "flex",    
        width: '100%',  
        marginBottom: '25px'
    },
    titleQuizz: {
        display: 'flex',
        width: '50%',
        alignItems: 'flex-start',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#3f51b5',
    },
    counter: { 
        display: 'flex',
        width: '50%',
        alignItems: 'flex-end',
        flexDirection: 'column',
        fontSize: '17px',
        fontWeight: 'bold',
        color: '#3f51b5',
    }
  })

interface OwnProps {
    currentQuestion: number;
    totalOfQuestion: number;
    timerQuiz: number;
}

const QuizHeader: React.FC<OwnProps> = ({ totalOfQuestion, currentQuestion, timerQuiz }) => {

    const [timerOut, setTimerOut] = useState<string | null>(null); 
    const [endTime] = useState(moment().add({ minutes: timerQuiz }));
 
    useEffect(() => {     
        setInterval(() => {     
            const startTime = moment(new Date());       
            var duration = moment.duration(endTime.diff(startTime));
            var hours = Math.round(duration.asHours()) > 1 ? Math.round(duration.asHours()) : 0;
            var minutes = Math.round(duration.asMinutes()) - hours * 60;        
            const timetOut = minutes > 0 ? `${hours}h ${minutes}m` : null;
            setTimerOut(timetOut);
        }, 1000)
    }, [timerOut])

    const completed = (currentQuestion * 100) / totalOfQuestion;
    const classes = useStyles();
    return (
        <Box bgcolor="#f5f5f5"  border="border-radius: 4px" marginBottom="20px" p={1}>
            <div className={classes.header}>
                <div className={classes.titleQuizz}>
                    <span>QUIZ XPTO</span>
                </div>
                <div className={classes.counter}>
                    <span> {timerOut ? `Time limit: ${timerOut}` : 'Time is over!'}</span>
                </div>
            </div>
            <Box flexDirection="row" justifyContent="space-between">
                <Box width="100%">
                    <LinearProgress variant="determinate" value={completed} />
                </Box>
            </Box>
        </Box>
    );
}


export default QuizHeader;