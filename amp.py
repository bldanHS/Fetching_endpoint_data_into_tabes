from flask_restful import Resource
from utils import read_csv, filter_results


class AmpApps(Resource):
    def __init__(self, requestparams):
        self.requestparams = requestparams

    def get(self):
        page = self.requestparams.get("limit", 1, type=int)
        thpage = self.requestparams.get("start", 0, type=int)
        filecontent = read_csv("/amp_global_applications.csv")
        return filter_results(filecontent, page, thpage)