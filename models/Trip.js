const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const moment = require("moment");

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lodgingType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lodgingUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      get: function () {
        return mockComponent(this.getDataValue("start_date")).format("ll");
      },
    },
    end_date: {
      type: DataTypes.DATEONLY,
      get: function () {
        return mockComponent(this.getDataValue("end_date")).format("ll");
      },
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    activities_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "activities",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trip",
  }
);

module.exports = Trip;