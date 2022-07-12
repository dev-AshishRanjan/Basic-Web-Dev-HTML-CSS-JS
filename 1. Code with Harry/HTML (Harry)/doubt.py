n=int(input())
list1=[int(i) for i in input().split()]

a=max(list1)
sec_maximum=0

for i in range(n):
    if list1[i] !=a:
        if list1[i] > sec_maximum:
            sec_maximum = list1[i]

sec_max_ind=list1.index(sec_maximum)
print(sec_max_ind +1)    ## prints the element's position in array, it's not the index

    