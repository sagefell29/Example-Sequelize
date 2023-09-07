import { Request, Response } from "express";
import Slots from "../models/freeSlotModel";

export const getSlots = async (req: Request, res: Response) => {
  try {
    const slots = await Slots.findAll({
      attributes: ["slotid", "startTime", "endTime", "booked"],
    });
    res.json({ success: true, message: "All slots found.", data: slots });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getFreeSlots = async (req: Request, res: Response) => {
  try {
    const slots = await Slots.findAll({
      where: {
        booked: false
      },
      attributes: ["slotid", "startTime", "endTime", "booked"],
    });
    res.json({ success: true, message: "All slots found.", data: slots });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const addSlot = async (req: Request, res: Response) => {
  try {
    const { startTime, endTime } = req.body;
    const check = await Slots.findAll({
      where: {
        startTime: startTime,
        endTime: endTime,
      },
    });
    if (check.length > 0) {
      return res.json({ success: false, message: "Clashing slots." });
    }
    const create = await Slots.create({
      startTime: startTime,
      endTime: endTime,
    });
    if (create) {
      return res.json({ success: true, message: "Slot successfully added." });
    } else {
      return res.json({ success: false, message: "Error adding slot." });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
