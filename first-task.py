from flask import Flask
from flask_restful import Resource , Api
import json
import csv
from collections import defaultdict
from flask_cors import CORS
import http






   
    
app = Flask(__name__)
api = Api(app)
CORS(app)
api.add_resource(Applications, '/applications', endpoint='apps')
api.add_resource(Global, '/global', endpoint='global')
api.add_resource(Ampapps, '/amp', endpoint='amp')
#@app.resoute("amp_tables/amp_organization_applications.csv")




# reader = csv.DictReader(Items, delimiter=",")
# for row in reader:
#     print(row[0])

APPLICATIONS = []
GLOBAL = []
AMP_APPS = []

with open("amp_tables_o/amp_organization_applications.csv") as file:
    
    applications = csv.DictReader(file)

    for application in applications:
         #if (application["organizationId"] == )
         APPLICATIONS.append(application)
    
    # for item in APPLICATIONS:
    #     print(item["organizationId"])
        

    new_dict = {}

   #new_dict[item[]]
    for item in APPLICATIONS:
        if item["organizationId"] not in new_dict:
            new_dict[item["organizationId"]] = list()
        new_dict[item["organizationId"]].append(item["applicationKey"])



with open("amp_tables_o/amp_applications.csv") as file:
    
    amps = csv.DictReader(file)

    for amp in amps:
         AMP_APPS.append(amp)


with open("amp_tables_o/amp_global_applications.csv") as file:
    
    globals = csv.DictReader(file)

    for glob in globals:
         GLOBAL.append(glob)
              
        
        


if __name__ == "__main__":
     app.run(debug=True)

