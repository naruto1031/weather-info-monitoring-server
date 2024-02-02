import admin from "firebase-admin";
import { LocationData } from "../model/location_data";
import { SerialManager } from "./serial_manager";

export class GPSManager {
    static latitude: number = 0;
    static longitude: number = 0;

    private getTimestamp(): number {
        const date: Date = new Date();
        const timestamp: number = Math.floor(date.getTime() / 1000);
        return timestamp;
    }

    public async getLocationFromGPS() {
        /// GPSから取得した座標
        const serialManager = new SerialManager();
        await serialManager.setCoodinateFromParser();

        const GPSdata = {
            latitude: GPSManager.latitude,
            longitude: GPSManager.longitude,
        };
        const coordinate: FirebaseFirestore.GeoPoint = new admin.firestore.GeoPoint(GPSdata.latitude, GPSdata.longitude);
        const timestamp = this.getTimestamp();

        const location: LocationData = new LocationData(timestamp, coordinate);
        return location;
    }
}