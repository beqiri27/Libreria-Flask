import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/libri";

function App() {
  const [libri, setLibri] = useState([]);
  const [tema, setTema] = useState("dark");
  const [filtri, setFiltri] = useState({
    autore: "",
    genere: "",
  });
  const [preferiti, setPreferiti] = useState([]);

  // Carica i libri all'avvio
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setLibri);
  }, []);

  // Gestione input filtri
  const handleFilterChange = (e) => {
    setFiltri({ ...filtri, [e.target.name]: e.target.value });
  };

  // Toggle tema
  const toggleTema = () => {
    setTema(tema === "dark" ? "light" : "dark");
  };

  // Aggiungi/Rimuovi dai preferiti
  const handleTogglePreferiti = (id) => {
    if (preferiti.includes(id)) {
      setPreferiti(preferiti.filter((p) => p !== id));
    } else {
      setPreferiti([...preferiti, id]);
    }
  };

  // Elimina libro singolo
  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setLibri(libri.filter((l) => l.id !== id));
  };



  // Filtra i libri in base ai filtri
  const libri_filtrati = libri.filter((libro) => {
    const matchAutore =
      filtri.autore === "" ||
      libro.autore.toLowerCase().includes(filtri.autore.toLowerCase());
    const matchGenere =
      filtri.genere === "" ||
      libro.genere.toLowerCase().includes(filtri.genere.toLowerCase());
    return matchAutore && matchGenere;
  });

  // Prendi i valori unici di genere
  const generiUnici = [...new Set(libri.map((l) => l.genere))].sort();

  return (
    <div className={`app ${tema}`}>
      <div className="container">
        <h1>Libreria Flask</h1>
        <button className="tema-toggle" onClick={toggleTema}>
          {tema === "dark" ? "☀️ Tema Chiaro" : "🌙 Tema Scuro"}
        </button>
      <div className="filtri">
        <input
          name="autore"
          placeholder="Filtra per Autore"
          value={filtri.autore}
          onChange={handleFilterChange}
        />
        <select
          name="genere"
          value={filtri.genere}
          onChange={handleFilterChange}
        >
          <option value="">Tutti i Generi</option>
          {generiUnici.map((genere) => (
            <option key={genere} value={genere}>
              {genere}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Titolo</th>
            <th>Autore</th>
            <th>Anno</th>
            <th>Genere</th>
            <th>Preferito</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {libri_filtrati.map((libro) => (
            <tr key={libro.id} className={preferiti.includes(libro.id) ? "preferito" : ""}>
              <td>{libro.id}</td>
              <td>{libro.titolo}</td>
              <td>{libro.autore}</td>
              <td>{libro.anno}</td>
              <td>{libro.genere}</td>
              <td>
                <button className="favorite" onClick={() => handleTogglePreferiti(libro.id)}>
                  {preferiti.includes(libro.id) ? "⭐" : "☆"}
                </button>
              </td>
              <td>
                <button className="danger" onClick={() => handleDelete(libro.id)}>
                  Elimina
                </button>
              </td>
            </tr>
          ))}
          {libri_filtrati.length === 0 && (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                Nessun libro presente.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
    );
}

export default App;
