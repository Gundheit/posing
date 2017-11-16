/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('runnum', {
    rn_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rn_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rn_value: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rn_masa: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment4: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment5: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'runnum'
  });
};
