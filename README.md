# Sistema di Gestione Libreria

Una Web Application full-stack per la gestione di una libreria, sviluppata con React (frontend) e Flask (backend), che implementa un'architettura client-server con API REST.

## 🎯 Obiettivo del Progetto

Questo progetto didattico ha come scopo principale la comprensione pratica di:
- Distinzione tra frontend e backend in un'applicazione web
- Funzionamento delle API REST per lo scambio di dati
- Integrazione tra un client React e un server Flask
- Gestione dello stato e comunicazione HTTP asincrona

## 🛠️ Tecnologie Utilizzate

### Backend
- **Python 3.x**
- **Flask** - Framework web per Python
- **Faker** - Libreria per la generazione di dati fittizi
- **Flask-CORS** - Gestione delle policy CORS

### Frontend
- **React** - Libreria JavaScript per UI
- **JavaScript (ES6+)**
- **Fetch API** - Per le chiamate HTTP
- **CSS** - Styling dell'interfaccia

### Versionamento
- **Git & GitHub** - Controllo versione e collaborazione

## 📋 Requisiti Funzionali

### Backend (Flask)
1. **Inizializzazione dati**: Generazione automatica di circa 20 libri all'avvio del server tramite Faker
2. **Gestione libri**: Ogni libro contiene i campi `id`, `titolo`, `autore`, `anno`, `genere`
3. **API REST**:
   - `GET /api/libri` - Recupera l'elenco completo dei libri
   - `POST /api/libri` - Aggiunge un nuovo libro (ID generato dal server)
   - `DELETE /api/libri/<id>` - Elimina un libro specifico per ID
   - `DELETE /api/libri` - Elimina tutti i libri dalla libreria

### Frontend (React)
1. **Caricamento iniziale**: Recupero automatico dei libri all'avvio tramite `useEffect`
2. **Form controllato**: Inserimento di nuovi libri con validazione
3. **Operazioni CRUD**:
   - Visualizzazione elenco libri
   - Aggiunta nuovo libro
   - Eliminazione singolo libro
   - Cancellazione intera libreria
4. **Ricerca e filtraggio**: Filtro lato client per autore o genere

## 📐 Requisiti Non Funzionali

1. **Usabilità**: Interfaccia intuitiva e user-friendly
2. **Responsività**: Applicazione utilizzabile su diversi dispositivi
3. **Manutenibilità**: Codice pulito, commentato e ben organizzato
4. **Performance**: Risposta rapida alle operazioni dell'utente
5. **Gestione errori**: Feedback appropriato per operazioni fallite
6. **Separazione delle responsabilità**: Backend si occupa della logica di business, frontend della presentazione

## 📁 Struttura del Progetto

```
Libreria-Flask/
├── backend/
│   ├── app.py                 # Applicazione Flask principale
│   ├── requirements.txt       # Dipendenze Python
│   └── README.md             # Documentazione backend
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx           # Componente principale
│   │   ├── App.css          # Stili applicazione
│   │   └── index.jsx         # Entry point React
│   ├── package.json         # Dipendenze Node.js
│   └── README.md           # Documentazione frontend
│
└── README.md               # Questo file
```

## 👥 User Stories

### Come utente, voglio...

1. **Visualizzare i libri**
   - Vedere l'elenco completo dei libri disponibili nella libreria
   - Visualizzare per ogni libro: titolo, autore, anno di pubblicazione e genere

2. **Aggiungere un nuovo libro**
   - Compilare un form con i dettagli del libro (titolo, autore, anno, genere)
   - Ricevere conferma dell'aggiunta del libro
   - Vedere immediatamente il nuovo libro nell'elenco

3. **Cercare libri**
   - Filtrare i libri per autore
   - Filtrare i libri per genere
   - Ottenere risultati in tempo reale mentre digito

4. **Eliminare un libro**
   - Rimuovere un singolo libro dalla libreria
   - Ricevere conferma dell'eliminazione

5. **Resettare la libreria**
   - Eliminare tutti i libri con un'unica operazione
   - Ricevere conferma prima dell'eliminazione totale

## 🚀 Installazione e Avvio

### Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Il server Flask sarà disponibile su `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm start
```
L'applicazione React sarà disponibile su `http://localhost:3000`

## 🔗 API Endpoints

| Metodo | Endpoint | Descrizione |
|--------|----------|-------------|
| GET | `/api/libri` | Restituisce tutti i libri |
| POST | `/api/libri` | Aggiunge un nuovo libro |
| DELETE | `/api/libri/<id>` | Elimina un libro specifico |
| DELETE | `/api/libri` | Elimina tutti i libri |

## 📝 Esempio di Struttura Dati

```json
{
  "id": 1,
  "titolo": "Il nome della rosa",
  "autore": "Umberto Eco",
  "anno": 1980,
  "genere": "Giallo"
}
```

## 🤝 Contributi

Questo è un progetto didattico. Per contribuire:
1. Fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push del branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 Licenza

Progetto didattico - libero utilizzo per scopi educativi

## 👨‍💻 Autore

Repository: [https://github.com/beqiri27/Libreria-Flask](https://github.com/beqiri27/Libreria-Flask)
