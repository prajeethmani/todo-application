const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)


const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.use("api/auth",authRoutes);

app.use("api/todos",todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is running in the BACKGROUND");
});