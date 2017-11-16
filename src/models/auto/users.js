/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip_address: {
      type: "VARBINARY(16)",
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    activation_code: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    forgotten_password_code: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    forgotten_password_time: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    remember_code: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    created_on: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    last_login: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    company: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    kategori: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    alamat: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    kota: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
