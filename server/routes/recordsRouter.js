import express from "express";
import { getAllRecords } from "../controllers/recordsController.js";

const router = express.Router();

router.get("/", getAllRecords);

export default router;
