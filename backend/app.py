from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


def get_db_connection():
    conn = sqlite3.connect('recipes.db')
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/recipes', methods=['GET'])
def get_recipes():
    conn = get_db_connection()
    recipes = conn.execute('SELECT * FROM recipes').fetchall()
    conn.close()
    return jsonify([dict(row) for row in recipes])

@app.route('/recipes', methods=['POST'])
def add_recipe():
    data = request.get_json()
    name = data.get('name')
    ingredients = data.get('ingredients')
    instructions = data.get('instructions')

    conn = get_db_connection()
    conn.execute(
        'INSERT INTO recipes (name, ingredients, instructions) VALUES (?, ?, ?)',
        (name, ingredients, instructions)
    )
    conn.commit()
    conn.close()
    return jsonify({"message": "Recipe added!"}), 201

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000,debug=True)
