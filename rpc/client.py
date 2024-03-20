import xmlrpc.client

s = xmlrpc.client.ServerProxy('http://localhost:8000')
x= int(input("entre o 1-valor: "))
y=int(input("entre o 2-valor: "))
print("---------Somatorio----------")
z=int(input("entre o valor para o somatorio: "))
print("---------numero imaginario 1 ----------")
a1=float(input("parte real "))
i1=float(input("parte imagiaria"))
print("---------numero imaginario 2 ----------")
a2=float(input("parte real "))
i2=float(input("parte imagiaria"))
print("---------numero primo ----------")
p=int(input("entre o valor para o numero primo:"))

print(type(x))
print(s.add(x,y))  # Returns 2+3 = 5
print(s.sub(x,y))  # Returns 5-2=3
print(s.div(x,y))  # Returns 6/2 = 3
print(s.mul(x,y))  # Returns 5*2 = 10
print("---------sumatorio ----------")
print(s.Soma(z))
print("---------soma dos imaginarios ----------")
parteReal, parteIm = s.imaginarios_function(a1, i1, a2, i2)
print("complexo é {} + {}i".format(parteReal, parteIm))
print("---------Multiplicação dos imaginarios ----------")
parteReal, parteIm = s.mulimaginarios_function(a1, i1, a2, i2)
print("mul do complexo é {} + {}i".format(parteReal, parteIm))
print("---------numeros primos ----------")
print(s.Calq_Primo(p))
print(s.system.listMethods())