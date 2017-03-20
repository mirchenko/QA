import Question from './question';
import Answer from './answer';


Question.hasMany(Answer, { as: 'answer', foreignKey: 'id_question' });
Answer.belongsTo(Question, { as: 'question', foreignKey: 'id' });
