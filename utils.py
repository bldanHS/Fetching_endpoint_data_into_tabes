import csv


PATH = "amp_tables_o"

def read_csv(filename):
    with open(f"{PATH}{filename}") as file:
        return csv.DictReader(file)


