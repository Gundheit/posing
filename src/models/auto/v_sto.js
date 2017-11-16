/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_sto', {
    tso_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tso_qty: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'v_sto'
  });
};
