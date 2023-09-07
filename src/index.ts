import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/DB";
import consultationRouter from "./routes/firstConsultationRoutes";
import slotRouter from "./routes/freeSlotsRoutes";

dotenv.config();

const app = express();

const conn = async () => {
  try {
    await db.authenticate();
    console.log("Database Connected...");
  } catch (error) {
    console.error(error);
  }
};

const update = async () => {
  try {
    await db.sync();
    console.log("All models synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
};

conn();
update();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/consultation", consultationRouter);
app.use("/slots", slotRouter);

app.listen(5000, () => console.log("Server running at port 5000"));
