'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('segura', 10);

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password_hash: hashedPassword,
        last_login: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', { email: 'jane@example.com' }, {});
  }
};