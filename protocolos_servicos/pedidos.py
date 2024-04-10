# instalar package dnspython
import dns.resolver
my_resolver = dns.resolver.Resolver()
result1 = my_resolver.query('ipg.pt', 'A')
result2 = my_resolver.query('google.com', 'A')
list1=[result1,result2]
count=0
for val1 in list1:
    count=count+1
    for ipval in val1:
        print('IP', ipval.to_text(),count)

print("******************")
result4 = my_resolver.query('google.com', 'MX')
result5 = my_resolver.query('ipg.pt', 'MX')

result51 = my_resolver.query('sapo.pt', 'MX')
result52 = my_resolver.query('microsoft.com', 'MX')
result53 = my_resolver.query('amazon.com', 'MX')
result54 = my_resolver.query('baido.com', 'MX')
#result53 = dns.resolver.resolve('amazon.com', 'MX')
list2=[result4,result5,result51,result52,result53,result54]
for val2 in list2:
    print("*******TT***********",val2)
    for exdata in val2:
        print(' MX Record:', exdata.exchange.to_text())
print("******************")
""" 
#result6 = my_resolver.resolve('mail.google.com', 'CNAME')
result6 = my_resolver.resolve('mail.ipg.pt', 'CNAME')
result7 = my_resolver.resolve('mail.ipg.pt', 'CNAME')
result8 = my_resolver.resolve('mail.sapo.com', 'CNAME')
list3=[result6,result7,result8]
for val3 in list3:
    for cnameval in val3:
        print(' cname target address:', cnameval.target)
"""