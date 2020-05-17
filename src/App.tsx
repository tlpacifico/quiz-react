import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from './components/header.component';
import { bindActionCreators, Dispatch } from 'redux';
import * as quizActions from './store/quiz/actions';

class App extends React.Component<any> {
  componentDidMount() {
    const  { loadInitialState } = this.props;
    loadInitialState();
  }
  render() {
    return (
      <div>
        <h1>Alow</h1>
        <HeaderComponent></HeaderComponent>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(quizActions, dispatch);

export default connect(null, mapDispatchToProps)(App);
