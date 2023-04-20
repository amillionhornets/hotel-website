import mysql.connector
from flask import jsonify
import datetime as dt
from time import sleep

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="Password1"
)

mycursor = db.cursor()
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
    mycursor.execute(f"USE okihotel;")
    mycursor.execute(f"SELECT check_in, check_out FROM trans;")
    
    result = mycursor.fetchall()
    # checkin = result[0][0].strftime("%Y%m%d")
    # checkout = result[0][1].strftime("%Y%m%d")
    checkin = result[0][0]
    checkout = result[0][1]
    city = 'Tulsa'

    mycursor.execute(f"select hotel.id, hotelName, rooms.id from rooms join hotel on hotel.id = rooms.hotel_id where hotel.city = 'Tulsa'; ")
    cityHotels = mycursor.fetchall()
    rooms = []
    for hotels in range(len(cityHotels)): 
        rooms.append(cityHotels[hotels][2])
    availableRooms = []
    for i in range(len(rooms)):
        mycursor.execute(f"call sp_roomsAvailable2('{checkin}','{checkout}',{int(rooms[0])});")
        result2 = mycursor.fetchall()
        availableRooms.append(result2)
        sleep(10)
        db.commit()
    # if rooms[i] == result2[0][0]:
        #     rooms[i] = None
    # for x in range(len(rooms)):
    #     if rooms[x] != None:
    #         availableRooms.append(rooms[x])


    
    return availableRooms

    # return jsonify([{"checkin":checkin, "checkout":checkout}])

# Returns Information about the user on 
def getUserInfo(username):
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