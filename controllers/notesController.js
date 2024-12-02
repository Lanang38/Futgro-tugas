import { query } from "../Database/db.js";

// Tambah Notes
export const tambahNotes = async (req, res) => {
  const { title, note } = req.body;
  try {
    await query(
      `INSERT INTO notes (title, datetime, note) VALUES(?, CURRENT_TIMESTAMP, ?)`,
      [title, note]
    );
    res.status(200).json({
      msg: "Penambahan notes berhasil",
      data: { title, note, datetime: new Date().toISOString() },
    });
  } catch (error) {
    console.error("Penambahan notes gagal", error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Ambil Semua Notes
export const ambilSemuaNotes = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM notes`);
    res.status(200).json({
      msg: "Pengambilan data notes berhasil",
      data: result,
    });
  } catch (error) {
    console.error("Pengambilan semua notes gagal", error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Ambil Notes Berdasarkan ID
export const ambilNotesId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query(`SELECT * FROM notes WHERE id = ?`, [id]);
    if (result.length === 0) {
      return res.status(404).json({ msg: "Notes tidak ditemukan" });
    }
    res.status(200).json({
      msg: "Pengambilan data notes berhasil",
      data: result[0],
    });
  } catch (error) {
    console.error("Pengambilan notes berdasarkan ID gagal", error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};

// Ubah Notes
export const ubahNotes = async (req, res) => {
  const { id } = req.params;
  const { title, note } = req.body;
  try {
    await query(
      `UPDATE notes SET title = ?, datetime = CURRENT_TIMESTAMP, note = ? WHERE id = ?`,
      [title, note, id]
    );
    res.status(200).json({
      msg: "Pengubahan notes berhasil",
      data: { id, title, note, datetime: new Date().toISOString() },
    });
  } catch (error) {
    console.error("Pengubahan notes gagal", error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};


// Hapus Notes
export const hapusNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await query(`DELETE FROM notes WHERE id = ?`, [id]);
    res.status(200).json({ msg: "Penghapusan notes berhasil" });
  } catch (error) {
    console.error("Penghapusan notes gagal", error);
    res.status(500).json({ msg: "Terjadi kesalahan pada server" });
  }
};
