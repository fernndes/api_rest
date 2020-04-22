const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('users', [{
    nome: 'John Doe',
    email: 'john@jonhn.com',
    password_hash: await bcryptjs.hash('123456', 10),
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: () => {},
};

// Para criar a seed: npx sequelize seed:generate --name criar-usuarios
// npx sequelize db:seed:all
