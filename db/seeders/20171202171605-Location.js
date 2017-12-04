import {DbSeeder} from '../db-utils'
import * as C from '../db-const'

const dbSeeder = new DbSeeder(C.ENTITY_SEED_LENGTH, {
    'lat:every': ['21.2754584','22.1055376','23.1055376','24.1055376','25.1055376','26.1055376','27.1055376'], 
    'long:every': ['-81.2754584','-82.1055376','-83.1055376','-84.1055376','-85.1055376','-86.1055376','-87.1055376'], 
    'storeId:id': null,
    'createdAt': '11-11-2011',
  })

const locations = dbSeeder.generateEntities()

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', locations, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};
