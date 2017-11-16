/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmstcustomer', {
    tmc_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tmc_kode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmc_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmc_alamat: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tmc_telp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmc_hp: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmc_fax: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tmc_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmc_status: {
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
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblmstcustomer'
  });
};
