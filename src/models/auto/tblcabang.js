/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblcabang', {
    tc_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tc_nama: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tc_alamat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tc_flag: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tc_telp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tc_hp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tc_ip: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tblcabang'
  });
};
