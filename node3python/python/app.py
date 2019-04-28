from flask import Flask
from flask import jsonify
import urllib.request
import ssl
import socket
app = Flask(__name__) 

@app.route('/')
def index():
  ssl._create_default_https_context = ssl._create_unverified_context
  data = {
    'app': 'python flask',
    'host': socket.gethostname(),
    'php': urllib.request.urlopen('https://192.168.99.100/php').read(),
    'node': urllib.request.urlopen('https://192.168.99.100/node/data').read()
  }
  return jsonify(data)
  
@app.route('/data')
def data():
  data = {
    'app': 'python flask',
    'host': socket.gethostname()
  }
  return jsonify(data)