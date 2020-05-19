import React from 'react';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import './App.css'
import QuizHeader from './components/quiz-header/quiz-header.component';
import { bindActionCreators, Dispatch } from 'redux';
import * as quizActions from './store/quiz/actions';
import QuizBody from './components/quiz-body/quiz-body.component';
import QuizFooter from './components/quiz-footer/quiz-footer.component';

class App extends React.Component<any> {
  componentDidMount() {
    const  { loadInitialState } = this.props;
    loadInitialState();
  }
  render() {
    return (
      <Container maxWidth="md" className="app-container">    
        <QuizHeader />
        <QuizBody />
        <QuizFooter />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(quizActions, dispatch);

export default connect(null, mapDispatchToProps)(App);
