import axios from 'axios';

import {
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  NETWORK_ERROR,
  ADD_QUESTION,
  RECEIVE_ANSWERS,
  ADD_ANSWER
} from './types';

const ROOT = 'http://localhost:3030/';

export const networkError = () => dispatch => dispatch({ type: NETWORK_ERROR });

export const fetchQuestions = (page = 0) => dispatch => {
  dispatch({ type: REQUEST_QUESTIONS });
  return axios.get(ROOT)
    .then(res => dispatch({ type: RECEIVE_QUESTIONS, payload: res.data.result }))
    .catch(err => networkError());
};

export const createQuestion = ({ author, title, text }) => axios.post(ROOT, { author, title, text });

export const addQuestion = ({ author, title, text, id }) => dispatch => dispatch({ type: ADD_QUESTION, payload: { author, title, text, id } });

export const fetchAnswers = (id) => dispatch => axios.get(`${ROOT}answers/${id}`)
  .then(res => dispatch({ type: RECEIVE_ANSWERS, payload: { id, data: res.data } }))
  .catch(err => networkError());

export const createAnswer = ({ id, author, title, text }) => axios.post(`${ROOT}answer`, { id, author, title, text });

export const addAnswer = ({ idQuestion, author, title, text, id }) => dispatch => dispatch({ type: ADD_ANSWER, payload: { idQuestion,  data: { author, title, text, id } } });
