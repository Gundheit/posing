/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmstcoa', {
    tmcoa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tmcoa_kode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmcoa_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmcoa_aktiva: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmcoa_status: {
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
    tableName: 'tblmstcoa'
  });
};
