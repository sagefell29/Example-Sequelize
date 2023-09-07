import express from "express";
import { getSlots, getFreeSlots, addSlot } from "../controllers/freeSlotController";

const router = express.Router();

router.get('/getSlots', getSlots);
router.get('/getFreeSlots', getFreeSlots);
router.post('/addSlot', addSlot);

export default router;

