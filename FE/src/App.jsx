import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/libri";

function App() {
  const [libri, setLibri] = useState([]);
  const [form, setForm] = useState({
    titolo: "",
    autore: "",
    anno: "",
    genere: "",
  });

  // Carica i libri all'avvio
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setLibri);
  }, []);

  // Gestione input form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Aggiungi libro
  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const nuovoLibro = await res.json();
    setLibri([...libri, nuovoLibro]);
    setForm({ titolo: "", autore: "", anno: "", genere: "" });
  };

  // Elimina libro singolo
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setLibri(libri.filter((l) => l.id !== id));
  };

  // Elimina tutti i libri
  const handleDeleteAll = async () => {
    await fetch(API_URL, { method: "DELETE" });
    setLibri([]);
  };

  return (
    <div className="container">
      <h1>Gestione Libreria</h1>
      <form className="form" onSubmit={handleAdd}>
        <input
          name="titolo"
          placeholder="Titolo"
          value={form.titolo}
          onChange={handleChange}
          required
        />
        <input
          name="autore"
          placeholder="Autore"
          value={form.autore}
          onChange={handleChange}
          required
        />
        <input
          name="anno"
          placeholder="Anno"
          value={form.anno}
          onChange={handleChange}
          required
        />
        <input
          name="genere"
          placeholder="Genere"
          value={form.genere}
          onChange={handleChange}
          required
        />
        <button type="submit">Aggiungi Libro</button>
        <button type="button" className="danger" onClick={handleDeleteAll}>
          Elimina Tutti
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titolo</th>
            <th>Autore</th>
            <th>Anno</th>
            <th>Genere</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {libri.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.id}</td>
              <td>{libro.titolo}</td>
              <td>{libro.autore}</td>
              <td>{libro.anno}</td>
              <td>{libro.genere}</td>
              <td>
                <button className="danger" onClick={() => handleDelete(libro.id)}>
                  Elimina
                </button>
              </td>
            </tr>
          ))}
          {libri.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                Nessun libro presente.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
