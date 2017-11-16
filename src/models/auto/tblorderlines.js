/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblorderlines', {
    tol_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tol_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_harga: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_harga_after_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_status: {
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
    toh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tblorderheaders',
        key: 'toh_id'
      }
    },
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tblmstbarang',
        key: 'tmb_id'
      }
    },
    tol_harga_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_qty_retur: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_harga_jual1: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_harga_jual2: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_harga_jual3: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_qty1: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_qty2: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_qty3: {
      type: "DOUBLE",
      allowNull: true
    },
    tol_tipe_harga: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tol_harga_beli: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tblorderlines'
  });
};
