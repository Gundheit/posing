/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmaterialtransaksi', {
    tmt_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tmt_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tmt_tipe: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmt_dok_reff: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmt_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tmt_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tmt_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tmt_status: {
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
    tmb_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    tmt_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tmt_line_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblmaterialtransaksi'
  });
};
