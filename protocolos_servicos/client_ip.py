import ipaddress

print("Veryfing IP Address is well-formed")
print(" ",ipaddress.ip_address(u'192.168.0.255'))
try:
    print(" ", ipaddress.ip_address(u'192.168.0.255'))
except:
    print(" ","IP Address not well-formed")

print(" ",ipaddress.ip_address(u'FFFF:9999:2:FDE:257:0:2FAE:112D'))

print("checking the type of IP Address")
print(" ",type(ipaddress.ip_address(u'192.168.0.255')))
print(" ",type(ipaddress.ip_address(u'2001:dB8::')))
print(" ",ipaddress.ip_address(u'192.168.0.255').reverse_pointer)
print(" ",ipaddress.ip_network(u'192.168.0.0/28'))

print("Comparing IP Addresss")
print(" ",ipaddress.IPv4Address(u'192.168.0.2')>ipaddress.IPv4Address(u'192.168.0.1'))
print(" ",ipaddress.IPv4Address(u'192.168.0.2')==ipaddress.IPv4Address(u'192.168.0.1'))
print(" ",ipaddress.IPv4Address(u'192.168.0.2')!=ipaddress.IPv4Address(u'192.168.0.1'))

print("comparing IP Address Arithmetic")
print(" ",str(ipaddress.IPv4Address(u'192.168.0.2')+1))
print(" ",str(ipaddress.IPv4Address(u'192.168.0.253')-3))
print(" ",str(ipaddress.IPv4Address(u'192.168.0.253')+3))

try:
    print(" ", ipaddress.IPv4Address(u'192.168.0.2'))
except:
    print(" ","IP not well formed")
