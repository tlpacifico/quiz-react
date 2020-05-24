import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css'
import QuizApp from './components/quiz-app/quiz-app.component';


class App extends React.Component {
  render() {
    return (
      <Container maxWidth="md" className="app-container">    
       <QuizApp />
      </Container>
    );
  }
}

export default App;
