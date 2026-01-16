from faker import Faker
from flask import Flask, jsonify, request
from flask_cors import CORS
from dataclasses import dataclass

app = Flask(__name__)
CORS(app)
fake = Faker()

@dataclass
class Libro:
    id: int
    titolo: str
    autore: str
    anno: int
    genere: str

Libri = []

for i in range(20):
    libro = Libro(
        id=i + 1,
        titolo=fake.sentence(nb_words=3),
        autore=fake.name(),
        anno=fake.year(),
        genere=fake.word(ext_word_list=['Fantasy', 'Horror', 'Romance', 'Thriller', 'Sci-Fi', 'Biography'])
    )
    Libri.append(libro)

@app.route("/libri", methods=["GET"])
def get_libri():
    return jsonify([libro.__dict__ for libro in Libri])

@app.route("/libri", methods=["POST"])
def add_libro():
    data = request.json
    new_id = max([libro.id for libro in Libri], default=0) + 1
    libro = Libro(
        id=new_id,
        titolo=data.get("titolo", fake.sentence(nb_words=3)),
        autore=data.get("autore", fake.name()),
        anno=data.get("anno", fake.year()),
        genere=data.get("genere", fake.word(ext_word_list=['Fantasy', 'Horror', 'Romance', 'Thriller', 'Sci-Fi', 'Biography']))
    )
    Libri.append(libro)
    return jsonify(libro.__dict__), 201

@app.route("/libri/<int:id>", methods=["DELETE"])
def delete_libro(id):
    global Libri
    Libri = [libro for libro in Libri if libro.id != id]
    return jsonify({"message": f"Libro con id {id} eliminato."})

@app.route("/libri", methods=["DELETE"])
def delete_all_libri():
    Libri.clear()
    return jsonify({"message": "Tutti i libri sono stati eliminati."})

if __name__ == "__main__":
    app.run(debug=True)