from flask_restful import Resource
from utils import read_csv


class Apps(Resource):
    def get(self):
        return read_csv("/amp_organization_applications.csv")