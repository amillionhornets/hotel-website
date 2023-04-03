from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from databaseConnector import canLogin, signUp
app = Flask(__name__)

# logins = {"canLogin":[]}
# testSignUps = {"canSignup":[]}
key = 1

# Handles all the POST request
@app.route('/login', methods=['POST'])
def login():
    global key
    req = request.get_json(force=True)
    username = req['username']
    password = req['password']
    user = canLogin(username, password)
    # logins["canLogin"].append(f"{key}: {user}")
    key = key + 1
    return  jsonify({"canLogin": user})

# Handles all POST request in the sign up route
@app.route('/signup', methods=['POST'])
def signup():
    global key
    req = request.get_json(force=True)
    username = req['username']
    email = req['email']
    password = req['password']
    signUpReq = signUp(username, email, password)
    # testSignUps["canSignup"].append(f"{key}: {signUpReq}")
    key = key + 1
    return  jsonify({"canSignup": signUpReq})
@app.route('/home', methods=['GET'])
def home():
    return "redirect to /signup or /login with a POST req"

if __name__ == "__main__":
    app.run(debug=True)