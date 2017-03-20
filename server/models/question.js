import Sequelize from 'sequelize';
import sequelize from '../sequelize';

const Question = sequelize.define('question', {
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
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  text: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  tableName: 'question',
  timestamps: false
});

export default Question;
