/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_jual_hold', {
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    hold_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'v_jual_hold'
  });
};
