/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblhutangheaders', {
    thh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    thh_tgl: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tpoh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    thh_total: {
      type: "DOUBLE",
      allowNull: true
    },
    thh_status: {
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
    },
    thh_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'tblhutangheaders'
  });
};
