import { findIndex, map } from 'lodash';

import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  NETWORK_ERROR,
  ADD_QUESTION,
  RECEIVE_ANSWERS,
  ADD_ANSWER
} from '../actions/types';

const INITIAL_STATE = {
  isFetching: false,
  questions: [],
  error: ''
};

export default(state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REQUEST_QUESTIONS: {
      return { ...state, isFetching: true, error: '' };
    }
    case RECEIVE_QUESTIONS: {
      return { ...state, isFetching: false, questions: map(action.payload, question => { return { ...question, answers: [] } }) };
    }
    case NETWORK_ERROR: {
      return { ...state, isFetching: false, error: 'Network error!' };
    }
    case ADD_QUESTION: {
      const nextQuestions = state.questions.slice();
      nextQuestions.push(action.payload);
      return { ...state, questions: nextQuestions };
    }
    case RECEIVE_ANSWERS: {
      const nextQuestions = state.questions.slice();
      const index = findIndex(nextQuestions, questionsItem => questionsItem.id == action.payload.id);
      nextQuestions[index].answers = action.payload.data.result;
      return { ...state, questions: nextQuestions };
    }
    case ADD_ANSWER: {
      const nextQuestions = state.questions.slice();
      const index = findIndex(nextQuestions, questionsItem => questionsItem.id == action.payload.idQuestion);
      nextQuestions[index].answers.push(action.payload.data);
      return { ...state, questions: nextQuestions };
    }
    default: return state;
  }
};
