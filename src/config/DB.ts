import { Sequelize } from "sequelize";
import dotenv from "dotenv";

const db = new Sequelize("trial", process.env.USERNAME || "", process.env.PASS || "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
