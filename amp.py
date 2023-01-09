from flask_restful import Resource
from utils import read_csv, get_items
from flask_paginate import get_page_args
import math


class AmpApps(Resource):
    def __init__(self, requestparams):
        self.requestparams = requestparams

    def get(self):
        filecontent = read_csv("/amp_global_applications.csv")
        page, per_page, offset = get_page_args(page_parameter="page", per_page_parameter="per_page")
        total = len(filecontent)
        if(per_page >= total):
            raise IndexError ("index out of range")
        if(page > math.ceil(total/per_page)):
            raise IndexError ("index out of range")
        pagination_items = get_items(filecontent, offset=offset, per_page=per_page)
        
        return pagination_items