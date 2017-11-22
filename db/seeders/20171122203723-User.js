export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Person', [{
      email: 'john@doe.com',
      password: '',
      isDeleted: false
    },{
      email: 'jane@doe.com',
      password: '',
      isDeleted: false
    }, {
      email: 'kor@kor.com',
      password: '',
      isDeleted: false
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Person', null, {});
  }
};
