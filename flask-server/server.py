from flask import Flask
from flask_restful import reqparse, Api, Resource, request, abort
import pyodbc as odbc

# driverName = 'SQL SERVER'
# SERVER_NAME = 'DESKTOP-E81B4RQ'
# DATABASE_NAME = "certWebApp"

# connectionStr = f"""
#     DRIVER={{{driverName}}};
#     SERVER={SERVER_NAME};
#     DATABASE={DATABASE_NAME};
#     Trust_Connection=yes;
# """


# con = odbc.connect(connectionStr)

app = Flask(__name__)
api = Api(app)

users = {
    1: {"username": "test1", "password": "test1"},
    2: {"username": "test2", "password": "test2"},
    3: {"username": "test3", "password": "test3"}
}

task_post_args = reqparse.RequestParser()
task_post_args.add_argument("username", type=str)
task_post_args.add_argument("password", type=str)
# args = task_post_args.parse_args()


# def insert(con):
#     print("Insert")
#     writer = con.cursor()
#     writer.execute("INSERT INTO loginInfo VALUES ('dyl.pickle@cvtechonline.net', 'Password2')")
#     con.commit()

class home(Resource):
    def get(self):
        return users

class user(Resource):
    def get(self, user_id):
        return users[user_id]
    
    def post(self, user_id):
        args = task_post_args
        if user_id in users:
            abort(409, "User already taken")
        user[user_id] = {"username": args["username"], "password": args["password"]}
        return user[user_id]

api.add_resource(user, '/users/<int:user_id>')
api.add_resource(home, '/home')

if __name__ == "__main__":
    app.run(debug=True)