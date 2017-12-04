import {DbSeeder} from '../db-utils'
import * as C from '../db-const'

const dbSeeder = new DbSeeder(C.ENTITY_SEED_LENGTH, 
  {
    'storeId:every': [...Array(C.ENTITY_SEED_LENGTH).keys()], 
    'cryptoId:rand': [...Array(5).keys()].map(n => n+1), 
  })

const store_crypto = dbSeeder.generateEntities()

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Store_Crypto', store_crypto, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Store_Crypto', null, {});
  }
};
