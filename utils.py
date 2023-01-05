import csv
import json

PATH = "amp_tables_o"

def read_csv(filename, pagesize=20):
    LIST = []
    with open(f"{PATH}{filename}") as file:
        dict = (csv.DictReader(file))
        for row in dict:
            LIST.append(row)

        LIST.append({"pagesize" : pagesize })
        return LIST


arr = ["/amp_applications.csv", "/amp_organization_applications.csv","/amp_global_applications.csv" ]


for filename in arr:
    read_csv(filename)

