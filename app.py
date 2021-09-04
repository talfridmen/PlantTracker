import time

from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)

@app.route('/', methods=["GET"])
def index():
    return app.send_static_file('index.html')

@app.route('/favicon.ico', methods=["GET"])
def favicon():
    return app.send_static_file('favicon.ico')

@app.route('/api/timers')
def get_timers():
    return open('./timers.json', 'r').read()


@app.route('/api/timer/<int:timer_id>/reset')
def restart_timer(timer_id):
    data = json.loads(open('./timers.json', 'rb').read())
    data[timer_id]['deadline'] = time.time() + data[timer_id]['interval']
    open('./timers.json', 'w').write(json.dumps(data))


if __name__ == '__main__':
    app.run()
