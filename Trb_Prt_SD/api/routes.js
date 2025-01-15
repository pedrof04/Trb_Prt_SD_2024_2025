const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: "db", // Nome do serviço no docker-compose.yml
  database: process.env.POSTGRES_DB || "meu_projeto",
  password: process.env.POSTGRES_PASSWORD || "senha_secreta",
  port: 5432,
});

const router = express.Router();
router.get("/items", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM items");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar itens" });
  }
});

router.post("/items", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await pool.query(
      "INSERT INTO items (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar item" });
  }
});

router.put("/items/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const result = await pool.query(
      "UPDATE items SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Item não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar item" });
  }
});

router.delete("/items/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await pool.query("DELETE FROM items WHERE id = $1", [id]);
    if (result.rowCount > 0) {
      res.json({ message: "Item deletado com sucesso" });
    } else {
      res.status(404).json({ error: "Item não encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar item" });
  }
});

module.exports = router;
