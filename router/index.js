import express from "express";
import notesRoutes from "./notesRouter/notesRouter.js"; // Pastikan ekstensi .js ditambahkan

const Router = express.Router();
const api = "/api/v1";
Router.use(api, notesRoutes);

export default Router;
