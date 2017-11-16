/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblpoheaders', {
    tpoh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tpoh_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tpoh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tpoh_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tpoh_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tpoh_tgl_tempo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tpoh_no_resi: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tpoh_status: {
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
    tmv_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tpoh_no_reff: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tpoh_total_retur: {
      type: "DOUBLE",
      allowNull: true
    },
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'tblpoheaders'
  });
};
