import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { GPSManager } from "./gps_manager";

export class SerialManager {
    // private serial: SerialPort;
    // private parser: ReadlineParser;

    constructor() {
        // this.serial = new SerialPort({ 'path': "/dev/ttyUSB0", 'baudRate': 9600 });
        // this.parser = this.serial.pipe(new ReadlineParser({ delimiter: "\r\n" }));
    }

    public async setCoodinateFromParser() {
        const BASE_LATITUDE = 35.681236;
        const BASE_LONGITUDE = 139.767125;

        const randomLatitude = BASE_LATITUDE + Math.random() * 0.0001;
        const randomLongitude = BASE_LONGITUDE + Math.random() * 0.0001;

        GPSManager.latitude = randomLatitude;
        GPSManager.longitude = randomLongitude;

        // return new Promise<void>((resolve, reject) => {
        //     this.parser.on("data", (data: String) => {
        //         if (data.indexOf("$GNGGA") !== -1) {
        //             /// index of latitude and longitude
        //             const INDEX_OF_LATITUDE = 3;
        //             const INDEX_OF_LONGITUDE = 5;

        //             /// GPSから取得した座標
        //             const latitudeData = data.split(",")[INDEX_OF_LATITUDE];
        //             const longitudData = data.split(",")[INDEX_OF_LONGITUDE];

        //             /// GPSManagerに座標をセット
        //             GPSManager.latitude = latitudeData.length == 0 ? 35.681236 : Number(latitudeData);
        //             GPSManager.longitude = longitudData.length == 0 ? 139.767125 : Number(longitudData);

        //             /// Debug
        //             console.log(`latitude: ${latitudeData}`);
        //             console.log(`longitude: ${longitudData}`);

        //             /// serialPortを終了
        //             this.serial.close();
        //             this.parser.destroy();
        //             resolve();
        //         }
        //     });
        // });
    }
}