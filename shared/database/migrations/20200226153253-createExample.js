
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('example', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
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

  down: (queryInterface) => queryInterface.dropTable('example'),
};
