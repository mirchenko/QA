import { isEmpty } from 'lodash';

export default({ author, title, text }) => {

  const error = {};

  if(isEmpty(author)) {
    error.authorError = 'You must provide an author';
  }

  if(isEmpty(title)) {
    error.titleError = 'You must provide an title';
  }

  if(isEmpty(text)) {
    error.textError = 'You must provide an text';
  }

  return {
    isValid: isEmpty(error),
    error
  };
};
