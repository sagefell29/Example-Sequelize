import { DataTypes, Model } from "sequelize";
import db from "../config/DB";

const Users = db.define(
  "Users",
  {
    // id: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    // },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    booked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    slotid: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "users",
    freezeTableName: true,
  }
);

export default Users;
