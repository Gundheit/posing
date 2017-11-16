/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_retur_beli', {
    trbh_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    trbh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tmv_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmv_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tmb_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tmb_nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmb_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    trbl_qty_retur: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_harga: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'v_retur_beli'
  });
};
