const imu = require("node-sense-hat").Imu;

const IMU = new imu.IMU();


var myVar = setInterval(myTimer, 10000);




function myTimer() {
    IMU.getValue((err, data) => {
        if (err !== null) {
            console.error("Could not read sensor data: ", err);
            return;
        }

        console.log("Accelleration is: ", JSON.stringify(data.accel, null, "  "));
        console.log("Gyroscope is: ", JSON.stringify(data.gyro, null, "  "));
        console.log("Compass is: ", JSON.stringify(data.compass, null, "  "));
        console.log("Fusion data is: ", JSON.stringify(data.fusionPose, null, "  "));

        console.log("Temp is: ", data.temperature);
        if (data.temperature > 25) {
            console.log("Too hot");
            const matrix = require('sense-hat-led');
            // Using this library
            const matrix = require('node-sense-hat').Leds;

            const x = 3;
            const y = 3;
            const red = [255, 0, 0];

            // Set a single pixel
            matrix.setPixel(x, y, red);
        }
        console.log("Pressure is: ", data.pressure);
        console.log("Humidity is: ", data.humidity);
    });
}