import { DataTypes, Model } from "sequelize";
import db from "../config/DB";

const Slots = db.define(
  "Slots",
  {
    slotid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    booked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    modelName: "slots",
    freezeTableName: true,
  }
);

export default Slots;
