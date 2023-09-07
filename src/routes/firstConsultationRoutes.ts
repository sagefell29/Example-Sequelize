import express from "express";
import { getUsers, addUser} from "../controllers/firstConsultationController";

const router = express.Router();

router.get('/getusers', getUsers);
router.post('/adduser', addUser);

export default router;