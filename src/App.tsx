import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import QuizApp from './components/quiz-app/quiz-app.component';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'white'
  },
})

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.root}>
      <QuizApp />
    </Container>
  );
}

export default App;
