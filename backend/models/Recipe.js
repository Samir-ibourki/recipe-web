import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Recipe = sequelize.define("Recipe", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  preparationTime: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "30 Minutes",
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ingredients: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  instructions: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});
export default Recipe;
