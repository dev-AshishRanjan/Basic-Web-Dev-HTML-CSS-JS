try:
    a=int(input())
    # print(a)
except Exception as e:
    print("Enter an integeral value")
    a=int(input())
finally:
    if a > 15 and a < 244 :
        print(a)  ## the length of complementry dna
