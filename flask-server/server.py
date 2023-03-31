from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from databaseConnector import canLogin
app = Flask(__name__)

# users = [{"canLogin": "test1"}]
# users = {"loginAttempts":["canLogin: true"]}
users = {"canLogin":[]}

@app.route('/users', methods=['POST'])
def addUser():
    req = request.get_json(force=True)
    username = req['username']
    password = req['password']
    user = canLogin(username, password)
    users["canLogin"].append(f"1: {user}")
    return  jsonify({"canLogin": user})

@app.route('/home', methods=['GET'])
def home():
    return users

if __name__ == "__main__":
    app.run(debug=True)