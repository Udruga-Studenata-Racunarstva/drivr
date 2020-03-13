const { Model } = require('sequelize');

class Event extends Model {
  static fields({
    DATE, ENUM, TEXT, STRING,
  }) {
    return {
      type: {
        type: ENUM,
        values: ['PUBQUIZ', 'BOARDGAME', 'LECTURE', 'KARAOKE'],
        unique: { msg: 'The specified email address is already in use.' },
      },
      description: {
        type: TEXT,
      },
      eventDate: {
        type: DATE,
        field: 'event_date',
      },
      imgUrl: {
        type: STRING,
        field: 'img_url',
      },
      createdAt: {
        type: DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DATE,
        field: 'updated_at',
      },
      deletedAt: {
        type: DATE,
        field: 'deleted_at',
      },
    };
  }

  static associate({ Location }) {
    this.hasOne(Location, {
      foreignKey: { name: 'locationId', field: 'location_id' },
    });
  }

  static options() {
    return {
      modelName: 'event',
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    };
  }
}
module.exports = Event;
