import Answer from '../../../models/answer';
import { map, isEmpty } from 'lodash';

import { REQUIRE_ANSWER_AUTHOR, REQUIRE_ANSWER_TITLE, REQUIRE_ANSWER_TEXT, REQUIRE_QUESTION_ID } from '../../types';

const Create = (req, res, next) => {
  const { title, text, author, id } = req.body;

  if(!title) {
    return res.status(422).sed({ error: REQUIRE_ANSWER_TITLE });
  }

  if(!author) {
    return res.status(422).send({ error: REQUIRE_ANSWER_AUTHOR });
  }

  if(!text) {
    return res.status(422).send({ error: REQUIRE_ANSWER_TEXT });
  }

  if(!id) {
    return res.status(422).send({ error: REQUIRE_QUESTION_ID });
  }

  Answer.create({ title, text, author, id_question: id })
    .then(created => res.send(created))
    .catch(err => console.log(err));
};

export { Create };
