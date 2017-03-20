import Answer from '../../../models/answer';

const Index = (req, res, next) => {
  Answer.findAll({ where: { id_question: req.params.id } })
    .then(result => res.json({ result }))
    .catch(err => next(err));
};

export { Index };
