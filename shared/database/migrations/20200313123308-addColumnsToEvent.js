
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'event',
      'description',
      {
        type: Sequelize.TEXT,
      },
    ),
    queryInterface.addColumn(
      'event',
      'eventDate',
      {
        type: Sequelize.DATE,
        field: 'event_date',
      },
    ),
    queryInterface.addColumn(
      'event',
      'imgUrl',
      {
        type: Sequelize.STRING,
        field: 'img_url',
      },
    ),
  ]),

  down: (queryInterface, Sequelize) => [
    queryInterface.removeColumn('event', 'eventDate'),
    queryInterface.removeColumn('event', 'description'),
    queryInterface.removeColumn('event', 'imgUrl'),
  ],
};
