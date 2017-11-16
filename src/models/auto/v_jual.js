/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_jual', {
    tol_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    toh_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'v_jual'
  });
};
