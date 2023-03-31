from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from databaseConnector import canLogin, signUp
app = Flask(__name__)

# users = [{"canLogin": "test1"}]
# users = {"loginAttempts":["canLogin: true"]}
logins = {"canLogin":[]}
key = 1
@app.route('/users', methods=['POST'])
def login():
    global key
    req = request.get_json(force=True)
    username = req['username']
    password = req['password']
    user = canLogin(username, password)
    logins["canLogin"].append(f"{key}: {user}")
    key = key + 1
    return  jsonify({"canLogin": user})

# 
@app.route('/signup', methods=['POST'])
def signup():
    req = request.get_json(force=True)

    return  "hi"
@app.route('/home', methods=['GET'])
def home():
    return logins

if __name__ == "__main__":
    app.run(debug=True)