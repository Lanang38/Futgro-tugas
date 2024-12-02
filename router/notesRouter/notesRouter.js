import express from "express";
import {
  tambahNotes,
  ambilSemuaNotes,
  ambilNotesId,
  ubahNotes,
  hapusNotes,
} from "../../controllers/notesController.js";

const notesRoutes = express.Router();

notesRoutes.post("/notes", tambahNotes);
notesRoutes.get("/notes", ambilSemuaNotes);
notesRoutes.get("/notes/:id", ambilNotesId);
notesRoutes.put("/notes/:id", ubahNotes);
notesRoutes.delete("/notes/:id", hapusNotes);

export default notesRoutes;
