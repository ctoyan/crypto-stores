import {DbSeeder} from '../db-utils'
import * as C from '../db-const'

const dbSeeder = new DbSeeder(C.ENTITY_SEED_LENGTH, {
    'email:incr': 'email@test.com', 
    'password:incr': 'kor', 
    'isDeleted': false,
    'createdAt': '11-11-2011',
  })
const users = dbSeeder.generateEntities()

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
