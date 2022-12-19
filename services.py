from flask import Flask, app
from flask_cors import CORS
from flask_restful import Api

from flask_restful import Resource

from apps import Apps
from amp import AmpApps
from global_apps import Global


app = Flask(__name__)
api = Api(app)
CORS(app)


api.add_resource(Apps, '/applications', endpoint='apps')
api.add_resource(AmpApps, '/amp', endpoint='amp')
api.add_resource(Global, '/global', endpoint='global')

if __name__ == "__main__":
    app.run(debug=True)