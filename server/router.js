require('./models');
import * as Question from './controllers/question';
import * as Answer from './controllers/answer';

export default app => {
  app.get('/', Question.Index);
  app.post('/', Question.Create);

  app.get('/answers/:id', Answer.Index);
  app.post('/answer', Answer.Create);
};
