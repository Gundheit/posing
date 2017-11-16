/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tblmstbarang', {
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tmb_kode: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    tmb_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmb_keterangan: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tmb_nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmb_mfg_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tmb_exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tmb_no_lot: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmb_image: {
      type: DataTypes.STRING(40000),
      allowNull: true
    },
    tmb_warna: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmb_size: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmb_berat: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmb_status: {
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
    tmst_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tmkat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tmb_harga_beli: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_stock: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_harga_jual: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_stock_min: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_qty1: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_qty2: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_harga_jual2: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_qty3: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_harga_jual3: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_hitung_stock: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tc_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    tmb_harga_grosir: {
      type: "DOUBLE",
      allowNull: true
    },
    tmb_harga_ecer: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'tblmstbarang'
  });
};
