from flask_restful import Resource
from utils import returning_data_to_endpoint


class Global(Resource):
    def __init__(self, requestparams):
        self.requestparams = requestparams

    def get(self):
        return returning_data_to_endpoint("/amp_global_applications.csv")
        