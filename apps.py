from flask_restful import Resource


class Apps(Resource):
    def get(self):
        return 