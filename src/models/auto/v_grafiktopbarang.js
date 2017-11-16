/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_grafiktopbarang', {
    qty: {
      type: "DOUBLE",
      allowNull: true
    },
    total: {
      type: "DOUBLE",
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
    hargabeli: {
      type: "DOUBLE",
      allowNull: true
    },
    tgl: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tol_harga: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'v_grafiktopbarang'
  });
};
