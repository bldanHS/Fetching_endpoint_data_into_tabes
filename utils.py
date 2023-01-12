import csv
from flask_paginate import get_page_args
import math

PATH = "amp_tables_o"

def read_csv(filename):
    LIST = []
    with open(f"{PATH}{filename}") as file:
        dict = (csv.DictReader(file))
        for row in dict:
            LIST.append(row)
        return LIST


def get_items(list_of_content, offset=0, per_page=10):
    return list_of_content[offset: offset+per_page]


def returning_data_to_endpoint(filename):
        filecontent = read_csv(filename)
        page, per_page, offset = get_page_args(page_parameter="page", per_page_parameter="per_page")
        total = len(filecontent)
        if(per_page >= total):
            raise IndexError ("index out of range")
        if(page > math.ceil(total/per_page)):
            raise IndexError ("index out of range")
        pagination_items = get_items(filecontent, offset=offset, per_page=per_page)
        
        return pagination_items
    


