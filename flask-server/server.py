from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
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
# args = task_post_args.parse_args()
# def insert(con):
#     print("Insert")
#     writer = con.cursor()
#     writer.execute("INSERT INTO loginInfo VALUES ('dyl.pickle@cvtechonline.net', 'Password2')")
#     con.commit()

app = Flask(__name__)

users = [{"username": "test1"},{"username": "test2"},{"username": "test3"}]


@app.route('/users', methods=['POST'])
def addUser():
    user = {"username": 'test4'}
    users.append(user)
    return jsonify({"username": user})
@app.route('/home', methods=['GET'])
def home():
    return users

if __name__ == "__main__":
    app.run(debug=True)