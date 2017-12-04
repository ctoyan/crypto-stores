import {DbSeeder} from '../db-utils'
import * as C from '../db-const'

const abbr = ['BTC', 'LTC', 'ETH', 'BTCC', 'OMG', 'IOTA']
const cryptoNames = ['Bitcoin', 'Litecoin', 'Ethereum', 'BitcoinCash', 'OmiseGo', 'Iota']
const dbSeeder = new DbSeeder(abbr.length,
  {
    'abbr:every': abbr, 
    'name:every': cryptoNames, 
    'createdAt': '11-11-2011',
  })

const cryptos = dbSeeder.generateEntities()

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cryptos', cryptos, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cryptos', null, {});
  }
};
