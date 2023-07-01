import express from "express";

export const RouterBooks = express.Router();

// Ruta GET para obtener todos los libros
RouterBooks.get("/save_books", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query("SELECT * FROM books", (err, rows) => {
      if (err) return res.send(err);

      res.json(rows);
    });
  });
});

// Ruta POST para agregar un nuevo libro
RouterBooks.post('/add_book', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('INSERT INTO books SET ?', [req.body], (err, result) => {
    if(err)return res.send(err);

      res.send(req.body);
    });
  });
});


RouterBooks.delete('/books/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, result) => {
    if(err)return res.send(err);

       res.send("libro borrado");
    });
  });
});


RouterBooks.put('/books/:id', (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query('UPDATE books SET ? WHERE id = ?', [req.body,req.params.id], (err, result) => {
    if(err)return res.send(err);

      res.send('listo y actualizado');
    });
  });
});


