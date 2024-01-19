import admin from "firebase-admin";
import { LocationData } from "../model/location_data";

export class GPSManager {
    private getTimestamp(): number {
        const date: Date = new Date();
        const timestamp: number = Math.floor(date.getTime() / 1000);
        return timestamp;
    }

    public async getLocationData() {
        /// GPSから取得した座標
        const GPSdata = {
            latitude: 35.681236,
            longitude: 139.767125,
        };
        const coordinate: FirebaseFirestore.GeoPoint = new admin.firestore.GeoPoint(GPSdata.latitude, GPSdata.longitude);
        const timestamp = this.getTimestamp();

        const location: LocationData = new LocationData(timestamp, coordinate);
        return location;
    }
}