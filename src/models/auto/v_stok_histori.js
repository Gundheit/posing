/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_stok_histori', {
    tmb_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tmb_nobarcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tmb_nama: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    tmb_harga_beli: {
      type: "DOUBLE",
      allowNull: true
    },
    tgl: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    qtyawal: {
      type: "DOUBLE",
      allowNull: true
    },
    qtymasuk: {
      type: "DOUBLE",
      allowNull: true
    },
    qtyjual: {
      type: "DOUBLE",
      allowNull: true
    },
    qtyrjual: {
      type: "DOUBLE",
      allowNull: true
    },
    qtysto: {
      type: "DOUBLE",
      allowNull: true
    },
    qtyrbeli: {
      type: "DOUBLE",
      allowNull: true
    },
    qtytransmasuk: {
      type: "DOUBLE",
      allowNull: true
    },
    qtytranskeluar: {
      type: "DOUBLE",
      allowNull: true
    },
    qtyakhir: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'v_stok_histori'
  });
};
