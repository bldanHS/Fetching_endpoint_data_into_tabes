from flask import Flask, app
from flask_cors import CORS
from flask_restful import Resource, Api
from read_applications import Applications
from amp import AmpApps
from global_apps import Global


app = Flask(__name__)
api = Api(app)
CORS(app)


api.add_resource(Applications, '/applications', endpoint='apps',  )
api.add_resource(Global, '/global', endpoint='global')
api.add_resource(AmpApps, '/amp', endpoint='amp')

if __name__ == "__main__":
     app.run(debug=True)