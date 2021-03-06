/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblreturbeliheaders', {
    trbh_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    trbh_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    trbh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tmv_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tpoh_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    trbh_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    segment1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment5: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    last_updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    trbh_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblreturbeliheaders'
  });
};
