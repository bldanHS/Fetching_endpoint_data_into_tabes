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
    if(page >= len(dict)):
        raise IndexError ( "list index out of range")
    # elif(thpage = ):
    #     s
    filtered_elements = dict[thpage:thpage+page]
    return filtered_elements    
    


