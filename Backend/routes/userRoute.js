import express from "express"
import { getOtherUser, login, logout, register } from "../controller/UserController.js";
import isauthenicated from "../middleware/isAuthenicateed.js";

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isauthenicated, getOtherUser);
export default router;