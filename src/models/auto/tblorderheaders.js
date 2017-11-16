/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblorderheaders', {
    toh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    toh_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    toh_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    toh_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    toh_total: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_status: {
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
    tmc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    toh_tipe: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    toh_pending: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    toh_tunai: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_voucher: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_credit: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_debit: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_disc_rp: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_kembali: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_pembulatan: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_total_after_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    toh_total_retur: {
      type: "DOUBLE",
      allowNull: true
    },
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblorderheaders'
  });
};
