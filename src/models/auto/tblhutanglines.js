/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblhutanglines', {
    thl_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    thl_bayar: {
      type: "DOUBLE",
      allowNull: true
    },
    thl_sisa: {
      type: "DOUBLE",
      allowNull: true
    },
    thh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    thl_status: {
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
    },
    thl_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    thl_total: {
      type: "DOUBLE",
      allowNull: true
    },
    thl_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tblhutanglines'
  });
};
