from flask_restful import Resource, reqparse
from utils import read_csv


class Apps(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument("pagesize")
        parsed_args = parser.parse_args()
        return read_csv("/amp_organization_applications.csv", pagesize=parsed_args['pagesize'])