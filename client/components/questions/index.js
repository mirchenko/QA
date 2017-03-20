import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import * as actions from '../../actions';
import Question from './question';
import { Spinner, Form } from '../common';
import { createQuestion } from '../../actions'

class Questions extends Component {
  componentWillMount() {
    this.props.fetchQuestions();
  }

  renderQuestions() {
    return this.props.questions.questions.map(question => <Question key={question.id} {...question} />);
  }

  render() {
    const { isFetching } = this.props.questions;
    return (
      <div>
        { isFetching ? <Spinner /> : this.renderQuestions() }
        <hr/>
        <Form submitAction={createQuestion} afterSubmitAction={this.props.addQuestion}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps, actions)(Questions);
