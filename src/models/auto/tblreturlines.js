/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblreturlines', {
    trl_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tblmstbarang',
        key: 'tmb_id'
      }
    },
    tmb_nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    trl_status: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    segment2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    segment1: {
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
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    last_updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    trh_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'tblreturheaders',
        key: 'trh_id'
      }
    },
    trl_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    trl_harga: {
      type: "DOUBLE",
      allowNull: true
    },
    trl_total: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tblreturlines'
  });
};
