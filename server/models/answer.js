import Sequelize from 'sequelize';
import sequelize from '../sequelize';
import Question from './question';

const Answer = sequelize.define('answer', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_question: {
    type: Sequelize.INTEGER,
    references: {
      model: Question,
      key: 'id'
    }
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  tableName: 'answer',
  timestamps: false
});


export default Answer;
