import csv

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



    


