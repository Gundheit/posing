/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblstokopname', {
    tso_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tso_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tso_qty_akhir: {
      type: "DOUBLE",
      allowNull: true
    },
    tso_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tso_status: {
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
    tmb_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblstokopname'
  });
};
