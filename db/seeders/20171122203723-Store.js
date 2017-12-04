import {DbSeeder} from '../db-utils'
import * as C from '../db-const'

const dbSeeder = new DbSeeder(C.ENTITY_SEED_LENGTH, {
    'name:incr': 'Crypto Store',
    'description:rand': ['Some awesome description here', null],
    'website:rand': [ 'crypto.com', null ],
    'phone:rand': ['0888 888 888', '0899 999 999', null],
    'storeType:rand': ['online', 'physical', 'atm'],
    'isDeleted': false,
    'userId:id': null,
    'createdAt': '11-11-2011',
  })
const stores = dbSeeder.generateEntities()

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stores', stores, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stores', null, {});
  }
};
