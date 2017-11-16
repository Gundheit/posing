/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblpaymentheaders', {
    tpayh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tpayh_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tpayh_tipe: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tpayh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tpayh_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tpayh_dok_reff: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tpayh_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tpayh_status: {
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
    }
  }, {
    tableName: 'tblpaymentheaders'
  });
};
