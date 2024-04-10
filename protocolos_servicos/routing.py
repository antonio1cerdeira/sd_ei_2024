from flask import Flask
app= Flask(__name__)
@app.route('/')
def hello_world():
    return "Sistemas Distribuidos"
@app.route('/hello')
def heelo_world2():
    return "OK. sistemas distribuidos"
if __name__ == '__main__':
    app.run()
