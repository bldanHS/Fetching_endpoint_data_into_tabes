import csv


PATH = "amp_tables_o"

def read_csv(filename):
    LIST = []
    with open(f"{PATH}{filename}") as file:
        dict = (csv.DictReader(file))
        for row in dict:
            LIST.append(row)
        return LIST

def filter_results(dict, page, thpage):
    filtered_elements = dict[thpage:thpage+page]
    return filtered_elements
    

arr = ["/amp_applications.csv", "/amp_organization_applications.csv","/amp_global_applications.csv" ]

