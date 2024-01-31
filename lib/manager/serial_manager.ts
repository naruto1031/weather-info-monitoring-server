import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

export class SerialManager {
    private serial: SerialPort;
    private parser: ReadlineParser;

    constructor() {
        this.serial = new SerialPort({ 'path': "/dev/ttyUSB0", 'baudRate': 9600 });
        this.parser = this.serial.pipe(new ReadlineParser({ delimiter: "\r\n" }));
    }

    public async start() {
        this.parser.on("data", (data) => {
            console.log(data);
        });
    }
}