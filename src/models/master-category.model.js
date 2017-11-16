// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const masterCategory = sequelizeClient.define('tblmstkategori', {
    tmkat_id:{ 
      type: Sequelize.INTEGER,
      primaryKey: true,
       unique: true
    },
    tmkat_kode:{ type:  Sequelize.STRING},
    tmkat_nama :{ type:  Sequelize.STRING},
    tmkat_keterangan:{ type:  Sequelize.STRING},
    tmkat_status:{ type:  Sequelize.STRING},
    segment1:{ type:  Sequelize.STRING},
    segment2:{ type:  Sequelize.STRING},
    segment3:{ type:  Sequelize.STRING},
    segment4:{ type:  Sequelize.STRING},
    segment5:{ type:  Sequelize.STRING},
    creation_date:{ type:  Sequelize.STRING},
    created_by:{ type:  Sequelize.STRING},
    last_updated_date:{ type:  Sequelize.STRING},
    last_updated_by:{ type:  Sequelize.STRING}
  },{
     freezeTableName: true,
      tableName: 'tblmstkategori',
     createdAt: false,
      updatedAt: false
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  masterCategory.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return masterCategory;
};
