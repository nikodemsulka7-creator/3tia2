# mutable - obiekty mutowalne


lista=[1,2]
print(id(lista))
lista+=[3,4]
print(id(lista))


set={1,2,3}
print(id(set))
set.add(4)
print(id(set))


slownik={"a":0, "b":1}
print(id(slownik))
slownik["c"]=2
print(id(slownik))