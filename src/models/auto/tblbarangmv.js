/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblbarangmv', {
    tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    onhand: {
      type: "DOUBLE",
      allowNull: true
    },
    tml_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tbm_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    stokakhir: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tblbarangmv'
  });
};
