from flask_restful import Resource
from utils import read_csv


class AmpApps(Resource):
    def get(self):
        return read_csv("/amp_applications.csv")