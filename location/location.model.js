const { Model } = require('sequelize');

class Location extends Model {
  static fields({
    STRING, DATE,
  }) {
    return {
      name: {
        type: STRING,
        allowNull: false,
      },
      contactNumber: {
        type: STRING,
        allowNull: true,
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

  static associate({ Event }) {
    this.belongsToMany(Event, {
      foreignKey: { name: 'locationId', field: 'location_id' },
    });
  }

  static options() {
    return {
      modelName: 'location',
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    };
  }
}

module.exports = Location;
