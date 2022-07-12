n=int(input())
list1=[int(i) for i in input().split()]

list2=[int(i) for i in list1]

a=max(list1)
a_ind=list2.index(a)
list2.pop(a_ind)
b=max(list2)
b_ind=list1.index(b)

print(b_ind +1)    ## prints the element's position in array, it's not the index