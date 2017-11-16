/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblkaskeluar', {
    tkk_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tkk_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tkk_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tkk_kepada: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tkk_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tkk_no_reff: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tkk_ppn: {
      type: "DOUBLE",
      allowNull: true
    },
    tkk_sisa: {
      type: "DOUBLE",
      allowNull: true
    },
    tmv_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tmcoa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tkk_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tkk_status: {
      type: DataTypes.STRING(1),
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
    }
  }, {
    tableName: 'tblkaskeluar'
  });
};
