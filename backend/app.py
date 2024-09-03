from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# Configurar la conexión a MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bienestech"
)

# Ruta para obtener los talleres
@app.route('/api/talleresinicio', methods=['GET'])
def get_talleres():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM taller")  # Ajusta esta consulta según tu estructura de tabla
    talleres = cursor.fetchall()
    cursor.close()
    return jsonify(talleres)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
