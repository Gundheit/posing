/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbllog', {
    tlog_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tlog_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tlog_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tlog_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    tableName: 'tbllog'
  });
};
