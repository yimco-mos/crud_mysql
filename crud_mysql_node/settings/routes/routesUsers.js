import express from "express";

export const RouterUsers = express.Router();
RouterUsers.post("/new_user", (req, res) => {
  const { name, password } = req.body;

  // Validaciones de conexión
  if (!name || !password) {
    return res.status(400).res.send({ message: "Error, datos incompletos" });
  }

  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("INSERT INTO user SET ?", req.body, (err, result) => {
      if (err) return res.send(err);

      // Realiza la consulta SELECT para verificar si el usuario ya existe
      conn.query("SELECT * FROM user WHERE name = ?", name, (err, data) => {
        if (err) return res.send({ error: "Error en el servidor" });

        if (data.length > 0) {
          return res.send({ error: "El usuario ya existe" });
        }

        res.send({ message: "Usuario creado exitosamente" });
      });
    });
  });
});

RouterUsers.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM user", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

RouterUsers.put("/user/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      "UPDATE user SET ? WHERE id = ?",
      [req.body, req.params.id],
      (err, result) => {
        if (err) return res.send(err);

        res.json({ message: "acualizado correctamente" });
      }
    );
  });
});

RouterUsers.delete("/user/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM user WHERE id = ?",
      [req.params.id],
      (err, result) => {
        if (err) return res.send(err);
        res.send({ message: "eliminado" });
      }
    );
  });
});
