import mysql.connector

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
    mycursor.execute(f"SELECT * FROM userPass WHERE username='{userName}' AND email='{email}'")
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

def main():
    print("Error Ran the Database Connector File")
    db.close()

if __name__ == "__main__":
    main()