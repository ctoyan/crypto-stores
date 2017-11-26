export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'john@doe.com',
      password: '',
      isDeleted: false,
      createdAt: '11-11-2011',
    },{
      email: 'jane@doe.com',
      password: '',
      isDeleted: false,
      createdAt: '11-11-2011',
    }, {
      email: 'kor@kor.com',
      password: '',
      isDeleted: false,
      createdAt: '11-11-2011',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
