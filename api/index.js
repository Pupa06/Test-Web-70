import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import orderRoute from "./routes/order.js";
import inventoryRoute from "./routes/inventory.js";

const app = express();
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("DB Connection Successfull!")).catch((err) => console.log(err));

app.use(express.json());
app.use("/api", authRoute)
app.use("/api", orderRoute)
app.use("/api", inventoryRoute)

app.listen(5000, () => {
    console.log("Backend server is running!");
});