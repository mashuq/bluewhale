from flask import Flask
from flask import jsonify
import socket
app = Flask(__name__)

@app.route('/')
def index():
  data = {
    'app': 'python flask',
    'host': socket.gethostname()
  }
  return jsonify(data)
  
@app.route('/data')
def data():
  data = {
    'app': 'python flask',
    'host': socket.gethostname()
  }
  return jsonify(data)