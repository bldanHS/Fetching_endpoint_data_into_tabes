from flask_restful import Resource , Api
import csv




PATH = "amp_tables_o"

urlMap = {
    "/applications" : "/amp_organization_applications.csv",
    "/amp" : "/amp_applications.csv",
    "/global" : "/amp_global_applications.csv"
}
#itt az urlMap miert kell igy dictkent? nem lehetne csak egy sima lista 3 ertekkel?

class Applications(Resource):
    def get(self):
        APPLICATIONS = []
        for key,value in urlMap.items():
            with open(f"{PATH}{value}") as file:
                applications = csv.DictReader(file)
                for application in applications:
                    APPLICATIONS.append(application)
        # for a in APPLICATIONS:
        #     print(a)            
        return APPLICATIONS

app = Applications()
app.get()
