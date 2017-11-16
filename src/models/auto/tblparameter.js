/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblparameter', {
    tparam_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tparam_nama: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tparam_value: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tparam_ket: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'tblparameter'
  });
};
