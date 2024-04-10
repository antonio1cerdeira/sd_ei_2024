import ftplib
def getFile(ftp,filename):
    try:
        ftp.retrbinary("RETR "+filename, open(filename,'wb').write)
    except:
        print("ERROR")
ftp=ftplib.FTP("ftp.nluug.nl")