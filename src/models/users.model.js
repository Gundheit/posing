// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username:{
      type: DataTypes.STRING,
      allowNull:false
    },
    salt:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING},
    activation_code:{type:DataTypes.STRING},
    forgotten_password_code:{type:DataTypes.STRING},
    forgotten_password_time:{type:DataTypes.STRING},
    remember_code:{type:DataTypes.STRING},
    created_on:{type:DataTypes.STRING},
    last_login:{type:DataTypes.STRING},
    active:{type:DataTypes.STRING},
    first_name:{type:DataTypes.STRING},
    last_name:{type:DataTypes.STRING},
    company:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING},
    kategori:{type:DataTypes.STRING},
    alamat:{type:DataTypes.STRING},
    kota:{type:DataTypes.STRING}
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  users.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
