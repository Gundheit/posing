/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_pembelian', {
    tpoh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tpoh_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tpoh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tmv_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmb_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmb_nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tpol_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_harga: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tpoh_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tmv_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'v_pembelian'
  });
};
