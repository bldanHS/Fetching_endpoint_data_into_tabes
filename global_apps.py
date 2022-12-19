
from flask import Flask, app
from flask_restful import Resource
from read_applications import Applications



class Global(Resource):
    def get(self):
        return GLOBAL