def Eat():
    print("eat")
def Code():
    print("code")
def Sleep():
    print("sleep")


# Kumar Ashish Ranjan
Alive = True
while Alive :

    Binge_Watch = str(input("Enter a boolean :"))

    Eat()
    Code()
    Sleep()


    if Binge_Watch == "True":
        Alive = False
    else:
        continue

