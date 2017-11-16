/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_persediaan', {
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    qty: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    nilai: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    jual: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    },
    nilaiakhir: {
      type: "DOUBLE",
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'v_persediaan'
  });
};
