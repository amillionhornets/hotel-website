import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="Password1"
)

mycursor = db.cursor()
mycursor.execute("use testlogin;")

def canLogin(userName, password):
    mycursor.execute(f"SELECT * FROM userPass WHERE username='{userName}' and password='{password}'")
    # mycursor.execute(f"SELECT * FROM userPass WHERE username='{userName}'")
    result = mycursor.fetchall()
    if len(result) == 1:
        return True
    else:
        return False

def canSignUp(userName, password):
    mycursor.execute(f"SELECT * FROM userPass WHERE username='{userName}'")
    result = mycursor.fetchall()
    if len(result) == 1:
        return True
    else:
        return False

def signUp(userName, password):
    if canSignUp(userName, password) == True:
        mycursor.execute(f"INSERT INTO userPass(username, password) VALUES ('{userName}', '{password}')")
        db.commit()
        return True
    else:
        return False

def main():
    # mycursor.execute("INSERT INTO userpass (username, password) VALUES ('Admin', 'Password1');")
    # login_info = mycursor.execute("SELECT * FROM userPass;")
    # result = mycursor.fetchall()
    # for row in result:
    #     print(row)
    # db.commit()
    # print(login_info)

    db.close()


if __name__ == "__main__":
    main()