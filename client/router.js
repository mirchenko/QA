import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Question from './components/question';
import Questions from './components/questions/index';
import App from './components/app';

export default() => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Questions} />
        <Route path='/question/:id' component={Question} />
      </Route>
    </Router>
  );
};
