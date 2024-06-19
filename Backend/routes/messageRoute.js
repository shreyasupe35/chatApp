import express from "express"
import { getMessage, sendMessage } from "../controller/messageController.js";
import isauthenicated from "../middleware/isAuthenicateed.js";

const router=express.Router();
router.route("/send/:id").post(isauthenicated,sendMessage);
router.route("/:id").get(isauthenicated,getMessage);
export default router;