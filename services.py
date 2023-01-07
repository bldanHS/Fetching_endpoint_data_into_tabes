from flask import Flask, app, request
from flask_cors import CORS
from flask_restful import Api

from flask_restful import Resource

from apps import Apps
from amp import AmpApps
from global_apps import Global



app = Flask(__name__)
api = Api(app)
CORS(app)

def serve_file(filename, query_params):
    return filename

@app.route('/amp', methods =['GET'])
def get_amp_applications():
    amp_applications = AmpApps(requestparams=request.args)
    return amp_applications.get()

@app.route("/global", methods =['GET'])
def get_global():
    globalapplication = Global(requestparams=request.args)
    return globalapplication.get()

@app.route("/apps", methods =['GET'])
def get_apps():
    applications = Apps(requestparams=request.args)
    return applications.get()

if __name__ == "__main__":
    app.run(debug=True)
