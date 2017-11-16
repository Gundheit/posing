/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('v_perkasir', {
    tu_nama: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
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
    toh_tgl: {
      type: DataTypes.DATE,
      allowNull: true
    },
    qty: {
      type: "DOUBLE",
      allowNull: true
    },
    total: {
      type: "DOUBLE",
      allowNull: true
    }
  }, {
    tableName: 'v_perkasir'
  });
};
