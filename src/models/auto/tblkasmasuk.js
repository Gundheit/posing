/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblkasmasuk', {
    tkm_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tkm_no: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tkm_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tkm_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tkm_charge: {
      type: "DOUBLE",
      allowNull: true
    },
    tkm_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tmcoa_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tkm_no_reff: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tkm_keterangan: {
      type: DataTypes.STRING(500),
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
    tkm_terima: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tkm_ppn: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tblkasmasuk'
  });
};
