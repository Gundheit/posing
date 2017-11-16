/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmstparameter', {
    tmp_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tmp_nilai1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmp_nilai2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmp_nilai3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmp_nilai4: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmp_nilai5: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmp_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    last_updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblmstparameter'
  });
};
