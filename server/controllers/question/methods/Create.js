import Question from '../../../models/question';
import { map, isEmpty } from 'lodash';

import { REQUIRE_QUESTION_AUTHOR, REQUIRE_QUESTION_TITLE, REQUIRE_QUESTION_TEXT } from '../../types';

const Create = (req, res, next) => {
  const { title, text, author } = req.body;

  if(!title) {
    return res.status(422).sed({ error: REQUIRE_QUESTION_TITLE });
  }

  if(!author) {
    return res.status(422).send({ error: REQUIRE_QUESTION_AUTHOR });
  }

  if(!text) {
    return res.status(422).send({ error: REQUIRE_QUESTION_TEXT });
  }

  Question.create({ title, text, author })
    .then(created => res.send(created))
    .catch(err => next(err));
};

export { Create };
