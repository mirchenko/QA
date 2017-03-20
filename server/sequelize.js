
import Sequelize from 'sequelize';

const sequelize = new Sequelize('qa', 'bot', 'ctd0sAIXflkcqRpX', {
  host: '138.201.245.245',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

export default sequelize;
