
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn('event', 'type', {
    type: Sequelize.ENUM(['PUBQUIZ', 'BOARDGAME', 'LECTURE', 'KARAOKE']),
  }),
  down: (queryInterface, Sequelize) => queryInterface.changeColumn('event', 'type', {
    type: Sequelize.STRING,
  }),
};
