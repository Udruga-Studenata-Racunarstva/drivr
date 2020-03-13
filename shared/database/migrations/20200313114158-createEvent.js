
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('event', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: Sequelize.STRING,
    },
    locationId: {
      type: Sequelize.INTEGER,
      field: 'location_id',
      references: { model: 'location', key: 'id' },
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('event'),
};
