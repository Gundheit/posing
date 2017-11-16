/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblpolines', {
    tpol_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tpol_qty: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_harga: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_harga_after_disc: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_status: {
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
    segmnet4: {
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
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tblmstbarang',
        key: 'tmb_id'
      }
    },
    tpoh_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'tblpoheaders',
        key: 'tpoh_id'
      }
    },
    tpol_total: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_qty_retur: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_qty_terpakai: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_qty1: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_qty2: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_qty3: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_harga_jual1: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_harga_jual2: {
      type: "DOUBLE",
      allowNull: true
    },
    tpol_harga_jual3: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tblpolines'
  });
};
