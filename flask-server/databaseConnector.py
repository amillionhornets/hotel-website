import mysql.connector
from flask import jsonify
import datetime as dt
from time import sleep

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="Password1"
)

mycursor = db.cursor(buffered=False)
mycursor.execute("use testlogin;")

# Returns a bool if the user can login
def canLogin(userName, password):
    mycursor.execute(f"SELECT * FROM userPass WHERE username='{userName}' and password='{password}'")
    result = mycursor.fetchall()
    if len(result) == 1:
        return True
    else:
        return False

# Makes sure the users enter username or email isn't already in the database
def canSignUp(userName, email):
    mycursor.execute(f"SELECT * FROM userPass WHERE username='{userName}' OR email='{email}'")
    result = mycursor.fetchall()
    if len(result) == 0:
        return True
    else:
        return False

# Returns if the user can sign up or not
def signUp(userName, email, password):
    if canSignUp(userName, email) == True:
        mycursor.execute(f"INSERT INTO userPass(username,email, password) VALUES ('{userName}','{email}', '{password}')")
        db.commit()
        return True
    else:
        return False

# Returns a bool if the business can login
def canLoginBus(userName, password):
    mycursor.execute(f"SELECT * FROM businessUserPass WHERE businessName='{userName}' and password='{password}'")
    # mycursor.execute(f"SELECT * FROM userPass WHERE username='{userName}'")
    result = mycursor.fetchall()
    if len(result) == 1:
        return True
    else:
        return False

# Makes sure the business' enter username or email isn't already in the database
def canSignUpBus(userName, email):
    mycursor.execute(f"SELECT * FROM businessUserPass WHERE businessName='{userName}' AND email='{email}'")
    result = mycursor.fetchall()
    if len(result) == 0:
        return True
    else:
        return False

# Returns a bool if the business can login
def signUpBus(userName, email, password):
    if canSignUpBus(userName, email) == True:
        mycursor.execute(f"INSERT INTO businessUserPass(businessName, email, password) VALUES ('{userName}','{email}', '{password}')")
        db.commit()
        return True
    else:
        return False

# Inserts the booking information into the database
def booking(location, dateBooked, people):
    mycursor.execute(f"INSERT INTO booking(location, dateBooked, people) VALUES ('{location}', '{dateBooked}', '{people}')")
    db.commit()
    return True

#Grabs hotel name and rooms available
def gethotels():
    db1 = mysql.connector.connect(
        host="localhost",
        user="root",
        passwd="Password1"
    )
    db2 = mysql.connector.connect(
        host="localhost",
        user="root",
        passwd="Password1"
    )
    mycursor.close()
    mycursor1 = db1.cursor()
    chkin = dt.date(2023, 2, 1)
    chkout = dt.date(2023, 2, 4)
    city = "Tulsa"
    mycursor1.execute(f"USE okihotel;")
    mycursor1.execute(f"CALL GetAvailableHotels('{chkin}', '{chkout}', '{city}');")
    availablerooms = mycursor1.fetchall()
    mycursor1.close()
    availableHotels = []
    for i in range(len(availablerooms)):
        if availablerooms[i][1] not in availableHotels:
            availableHotels.append(availablerooms[i][1])
            
    mycursor2 = db2.cursor()
    # for x in range(len(availableHotels)):
    mycursor2.execute("use okihotel;")
    Hotels = []
    for x in range(len(availableHotels)):
        mycursor2.execute(f"SELECT * FROM hotel WHERE id = {availableHotels[x]}")
        Hotels.append(mycursor2.fetchall())

    return Hotels

# Returns Information about the user on 
def getUserInfo(username):
    mycursor.execute(f"use testLogin;")
    mycursor.execute(f"SELECT email, phoneNum FROM userpass WHERE username='{username}';")
    result = mycursor.fetchall()
    # print(result[0][0])
    email = result[0][0]
    phoneNum = result[0][1]
    return jsonify([{"email":email, "phoneNum":phoneNum}])

def main():
    print("Error Ran the Database Connector File")
    db.close()

if __name__ == "__main__":
    main()