/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmstvendor', {
    tmv_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tmv_kode: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    tmv_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmv_alamat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tmv_telp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmv_fax: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmv_hp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tmv_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmv_website: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmv_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    segment1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment4: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment5: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    last_updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'tblmstvendor'
  });
};
