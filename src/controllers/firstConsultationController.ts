import { Request, Response } from "express";
import Users from "../models/firstConsultationModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.findAll({
      attributes: ["phone", "slotid", "booked","createdAt","updatedAt"],
    });
    res.json({ success: true, message: "All users found.", data: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { phone } = req.body;
    const check = await Users.findAll({
      where: {
        phone: phone,
      },
    });
    if (check.length > 0) {
      return res.json({ success: false, message: "User already registered." });
    }
    const create = await Users.create({
      phone: phone,
    });
    if (create) {
      return res.json({ success: true, message: "User successfully added." });
    } else {
      return res.json({ success: false, message: "Error adding user." });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
