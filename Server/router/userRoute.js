import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  getEmployeeList,
  updateUserProfile,
  deleteUserProfile,
  activateUserProfile,
  profileinfo,
  getProfileInfo,
  getApprovers,
} from "../controllers/userController.js";

import { protectRoute, isAdminRoute } from "../middlewares/authMiddlewave.js";

const router = express.Router();

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/get-employee", protectRoute, isAdminRoute, getEmployeeList);
router.get("/approvers", protectRoute, getApprovers);

//profile 
router.put("/profile", protectRoute, updateUserProfile);
router.put("/data", protectRoute, profileinfo);
router.get("/getdata", protectRoute, getProfileInfo);


router
  .route("/:id")
  .put(protectRoute, isAdminRoute, activateUserProfile)
  .delete(protectRoute, isAdminRoute, deleteUserProfile); 


export default router;
