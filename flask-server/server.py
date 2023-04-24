from flask import Flask, jsonify, request
from flask_restful import Api, Resource, abort
from databaseConnector import canLogin, signUp, canLoginBus, signUpBus, booking, gethotels, getUserInfo
app = Flask(__name__)

# Handles all the POST request to /login on the Flask Server
@app.route('/login', methods=['POST'])
def login():
    req = request.get_json(force=True)
    username = req['username']
    password = req['password']
    user = canLogin(username, password)
    return  jsonify({"canLogin": user})

# Handles all POST request in the sign up route
@app.route('/signup', methods=['POST'])
def signup():
    req = request.get_json(force=True)
    username = req['username']
    email = req['email']
    password = req['password']
    signUpReq = signUp(username, email, password)
    return  jsonify({"canSignup": signUpReq})

# Gets the POST req from Business Logins
@app.route('/businessesLog', methods=['POST'])
def businessLog():
    req = request.get_json(force=True)
    username = req['username']
    password = req['password']
    accReq = canLoginBus(username, password)
    print(accReq)
    return(jsonify({"canLogBus": accReq}))

# Gets the POST req from Business Logins
@app.route('/businessesSign', methods=['POST'])
def businessSign():
    print("Hi")
    req = request.get_json(force=True)
    username = req['username']
    email = req['email']
    password = req['password']
    signUpReq = signUpBus(username, email, password)
    print(jsonify({"canSignupBus": signUpReq}))
    return  jsonify({"canSignupBus": signUpReq})

# Gets the POST req from booked rooms
@app.route('/Booking', methods=['POST'])
def booked():
    req = request.get_json(force=True)
    location = req['location']
    dateBooked = req['date']
    people = req['People']
    canBook = booking(location, dateBooked, people)
    return(jsonify({"canBook": canBook}))


# POST the user info based off the username
@app.route('/userInfo', methods=['POST'])
def userInfo():
    req = request.get_json(force=True)
    username = req['username']
    return getUserInfo(username)

@app.route('/Hotels', methods=['POST'])
def hotel():
    req = request.get_json(force=True)
    # print(req)
    return jsonify(gethotels())

# Default Page
@app.route('/', methods=['GET'])
def home():
    return "redirect to your url with a POST req"

if __name__ == "__main__":
    app.run(debug=True)