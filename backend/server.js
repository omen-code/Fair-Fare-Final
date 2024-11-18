import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect Database
connectDB();

// Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working!");
});

// Start Server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
