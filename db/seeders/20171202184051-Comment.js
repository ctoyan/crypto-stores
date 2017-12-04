import {DbSeeder} from '../db-utils'
import * as C from '../db-const'

const dbSeeder = new DbSeeder(C.ENTITY_SEED_LENGTH, 
  {
    'title:incr': 'Comment Title', 
    'content:incr': 'The awesome comment goes here', 
    'storeId:id': null,
    'userId:id': null,
    'createdAt': '11-11-2011',
  })

const comments = dbSeeder.generateEntities()

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', comments, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
