from flask import Flask
app=Flask(__name__)

@app.route('/')
def hello_world():
    return "sistemas distribuidos"
@app.route('/hello')
def hello_world1():
    return "OK. sistemas distribuidos"
if __name__ == '__main__':
    app.run()