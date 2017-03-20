
import Sequelize from 'sequelize';

const sequelize = new Sequelize('{dbname}', '{user}', '{password}', {
  host: '{hostname}',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

export default sequelize;
