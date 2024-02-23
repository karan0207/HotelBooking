import express from "express";
import Hotels from "../models/hotels.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();


//CREATE
router.post("/",verifyAdmin,createHotel);
//UPDATE
router.put("/:id",verifyAdmin,updateHotel);
//DELETE
router.delete("/delete/:id",verifyAdmin,deleteHotel);
//GET
router.get("/get/:id",getHotel);
//GET ALL
router.get("/get",getHotels);

router.get("/countByCity",countByCity);
router.get("/countByType",countByType);


export default router;
