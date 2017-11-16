/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmstlokasi', {
    tml_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tml_kode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tml_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tml_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tml_status: {
      type: DataTypes.STRING(1),
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
    tableName: 'tblmstlokasi'
  });
};
