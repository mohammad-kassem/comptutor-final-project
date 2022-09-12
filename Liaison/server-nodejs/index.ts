require("dotenv").config();
import express, { Application } from "express";
import cors from "cors";
import contactRouter from "./src/contact";
import authRouter from "./src/auth";
import messageRouter from "./src/message";
import { connectDB } from "./config/db";

connectDB();

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactRouter);
app.use("/api/messages", messageRouter);

app.listen(3000, () => console.log("Server running"));
