import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const PORTS = 4000;



const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://king0202k:karanyoyo2@hotellisting.ifq6hfn.mongodb.net/"
    );
    console.log(`mongodb connected `);
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
// mongoose.connection.on("connected",()=>{
//     console.log("mongodb connected");
// })

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORTS, () => {
  connectDB();
  console.log(`connected to ${PORTS}`);
});
