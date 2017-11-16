/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblprofile', {
    tp_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tp_kode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tp_nama: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    tp_alamat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tp_telp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tp_hp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tp_fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tp_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tp_website: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tp_username: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tp_password: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tp_foto: {
      type: "BLOB",
      allowNull: true
    },
    tp_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    segment1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment4: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    segment5: {
      type: DataTypes.STRING(200),
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
    tp_lisensi: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblprofile'
  });
};
