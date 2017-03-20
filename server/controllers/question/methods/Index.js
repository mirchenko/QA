import Question from '../../../models/question';
import Answer from '../../../models/answer';
import Sequelize from 'sequelize';

const Index = (req, res, next) => {
  Question.findAll()
    .then(result => res.json({ result }))
    .catch(err => next(err));
};

export { Index };
