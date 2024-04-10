import requests


#url = 'https://www.facebook.com/favicon.ico'
#url='https://dges.gov.pt/coloc/2022/col2listaser.asp?CodEstab=3092&CodCurso=9056&ids=51&ide=68&Mx=68'
#col2listaser.asp?CodEstab=3092&CodCurso=9056&ids=51&ide=68&Mx=68
url = 'https://www.facebook.com'
r = requests.get(url, allow_redirects=True)

open('facebook.html', 'wb').write(r.content)