/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_transkeluar', {
    qtytranskeluar: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tmb_nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ttbh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'v_transkeluar'
  });
};
