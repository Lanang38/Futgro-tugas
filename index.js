import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./Database/db.js";
import Router from "./router/index.js"; // Ekstensi .js

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(PORT, async () => {
  await testConnection();
  console.log(`Running at http://localhost:${PORT}`);
});
