/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_penjualan', {
    tol_harga_after_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tmc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    toh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    toh_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    toh_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toh_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_harga: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_total: {
      type: "DOUBLE",
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
    tmc_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'v_penjualan'
  });
};
