/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_beli', {
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tpol_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tpoh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'v_beli'
  });
};
