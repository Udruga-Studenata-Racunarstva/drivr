
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Model } = require('sequelize');

class User extends Model {
  static fields({
    DATE, STRING, VIRTUAL,
  }) {
    return {
      email: {
        type: STRING,
        validate: { isEmail: true },
        unique: { msg: 'The specified email address is already in use.' },
      },
      password: {
        type: STRING,
        allowNull: false,
      },
      firstName: {
        type: STRING,
        field: 'first_name',
        validate: { len: [2, 50] },
      },
      lastName: {
        type: STRING,
        field: 'last_name',
        validate: { len: [2, 50] },
      },
      fullName: {
        type: VIRTUAL,
        get() {
          return [this.firstName, this.lastName].filter(Boolean).join(' ') || null;
        },
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

  static hooks(Hooks) {
    return {
      [Hooks.beforeCreate](user) {
        return user.encryptPassword();
      },
      [Hooks.beforeUpdate](user) {
        return user.changed('password')
          ? user.encryptPassword()
          : Promise.resolve();
      },
      [Hooks.beforeBulkCreate](users) {
        const updates = [];
        users.forEach((user) => updates.push(user.encryptPassword()));
        return Promise.all(updates);
      },
    };
  }

  static options() {
    return {
      modelName: 'user',
      underscored: true,
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    };
  }

  authenticate(password) {
    if (!this.password) return Promise.resolve(false);
    return bcrypt
      .compare(password, this.password)
      .then((match) => (match ? this : false));
  }

  // eslint-disable-next-line class-methods-use-this
  encrypt(val) {
    return bcrypt.hash(val, 10);
  }

  generateToken(options = {}) {
    const payload = { id: this.id, email: this.email };
    Object.assign(options, {
      issuer: process.env.AUTH_JWT_ISSUER,
      audience: 'scope:setup',
    });
    return jwt.sign(payload, process.env.AUTH_JWT_SECRET, options);
  }

  encryptPassword() {
    if (!this.password) return Promise.resolve(false);
    return this
      .encrypt(this.password)
      .then((pw) => { this.password = pw; });
  }
}

module.exports = User;
