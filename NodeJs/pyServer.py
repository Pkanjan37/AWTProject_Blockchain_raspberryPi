from flask import Flask, request
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask import jsonify
from sense_hat import SenseHat

app = Flask(__name__)
api = Api(app)
sense = SenseHat()


class getReq(Resource):
    def get(self,light):
      if(light == "open"):
        blue = (0, 0, 255)
        yellow = (255, 255, 0)

        while True:
          sense.show_message("O!", text_colour=yellow, back_colour=blue, scroll_speed=0.05)
.      else:
        sense.clear()

class getSens(Resource):
    def get(self, type):
      if (type == 'temp'):
        deviceId = 0
        value = sense.get_temperature()
        result = {"deviceId":deviceId,"value":value}
        return jsonify(result)
      else if(type == 'pressure'):
        deviceId = 1
        value = sense.get_pressure()
        result = {'deviceId':deviceId,'value':value}
        return jsonify(result)
      else if(type == 'humi'):
        deviceId = 2
        value = sense.get_humidity()
        result = {'deviceId':deviceId,'value':value}
        return jsonify(result)
      else:
        return 'Error'

api.add_resource(getReq, '/turnOnLight/<light>')
api.add_resource(getSens,'/sensorData/<type>') # Route_2

if __name__ == '__main__':
     app.run(port='5002')
