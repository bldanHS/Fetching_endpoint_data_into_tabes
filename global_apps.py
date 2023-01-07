from flask_restful import Resource
from utils import read_csv, filter_results


class Global(Resource):
    def __init__(self, requestparams):
        self.requestparams = requestparams

    def get(self):
        filecontent = read_csv("/amp_global_applications.csv")
        rendervalue = self.requestparams.get("renderingamount", type=int)
        return filter_results(filecontent, rendervalue)
        