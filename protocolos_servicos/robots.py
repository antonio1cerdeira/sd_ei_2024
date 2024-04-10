import urllib3
http=urllib3.PoolManager()
resp1=http.request('GET','http://sapo.pt/robots.txt')
print(resp1.data)