export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Store', [{
      name: 'John Doe store',
      description: 'mega kor',
      website: 'kor.com',
      phone: '2123131213',
      storeType: 'online',
      isDeleted: false,
      userId: 1,
    }, {
      name: 'Jane Doe store',
      description: 'kor4e',
      website: 'kor4ence.com',
      phone: '212313121ciw1233',
      storeType: 'physical',
      isDeleted: false,
      userId: 1,
    }, {
      name: 'Bai Ganio ATM',
      description: 'shema da ima bate',
      storeType: 'atm',
      isDeleted: false,
      userId: 2,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Store', null, {});
  }
};
