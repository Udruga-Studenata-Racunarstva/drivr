
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: { msg: 'The specified email address is already in use.' },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      field: 'first_name',
      validate: { len: [2, 50] },
    },
    lastName: {
      type: Sequelize.STRING,
      field: 'last_name',
      validate: { len: [2, 50] },
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at',
    },
    deletedAt: {
      type: Sequelize.DATE,
      field: 'deleted_at',
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('user'),
};
