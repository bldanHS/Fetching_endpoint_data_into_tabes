from flask_restful import Resource
from utils import read_csv


class Global(Resource):
    def get(self):
        return read_csv("/amp_global_applications.csv")
        