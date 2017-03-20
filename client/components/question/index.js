import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findIndex, isEmpty, map } from 'lodash';
import * as actions from '../../actions';
import Answer from './answer';
import { Form } from '../common';
import { createAnswer } from '../../actions';

class Question extends Component {
  componentWillMount() {
    if(isEmpty(this.props.questions.questions)) {
      this.props.fetchQuestions()
        .then(() => this.props.fetchAnswers(this.props.params.id));
    } else {
      this.props.fetchAnswers(this.props.params.id);
    }
  }

  renderAnswers(answers) {
    return map(answers, answer => <Answer key={answer.id} {...answer} />);
  }


  render() {
    if(isEmpty(this.props.questions.questions)) {
      return null;
    }

    const { id, author, title, text, answers } = this.props.questions.questions[findIndex(this.props.questions.questions, questionsItem => questionsItem.id == this.props.params.id)];

    return (
      <div className="container">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{text}</p>
        <hr/>
        <div className="answers">
          {this.renderAnswers(answers)}
        </div>
        <hr/>
        <Form idQuestion={id} submitAction={createAnswer} afterSubmitAction={this.props.addAnswer} />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

export default connect(mapStateToProps, actions)(Question);
