import express from "express";
import { createEmail, getEmails, getEmailById, updateEmail, deleteEmail } from "../controller/contactController.js";
const router = express.Router();

router.post("/", createEmail);           
router.get("/", getEmails);             
router.get("/:id", getEmailById);       
router.put("/:id", updateEmail);        
router.delete("/:id", deleteEmail);    

export default router;
