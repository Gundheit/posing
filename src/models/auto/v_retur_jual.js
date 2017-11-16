/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_retur_jual', {
    tmb_id: {
      type: DataTypes.INTEGER(11),
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
    qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trl_harga: {
      type: "DOUBLE",
      allowNull: true
    },
    TOTAL: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'v_retur_jual'
  });
};
