/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_labarugi2', {
    tmc_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tmc_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tmb_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmb_nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    toh_tgl2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toh_tgl: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    qtyjual: {
      type: "DOUBLE",
      allowNull: true
    },
    hargajual: {
      type: "DOUBLE",
      allowNull: true
    },
    hargabeli: {
      type: "DOUBLE",
      allowNull: true
    },
    laba: {
      type: "DOUBLE",
      allowNull: true
    },
    tmkat_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmst_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'v_labarugi2'
  });
};
