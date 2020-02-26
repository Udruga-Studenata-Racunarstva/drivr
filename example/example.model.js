const { Model } = require('sequelize');

class Example extends Model {
  static fields(DataTypes) {
    const { DATE, TEXT } = DataTypes;
    return {
      description: {
        type: TEXT,
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

  static options() {
    return {
      modelName: 'example',
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    };
  }
}

module.exports = Example;
