import cron from "node-cron";
import { FirestoreManager } from "./manager/firestore_manager";
import { LocationData } from "./model/location_data";
import { GPSManager } from "./manager/gps_manager";

export class Cron {
    private firestoreManager: FirestoreManager;
    private gpsManager: GPSManager;

    constructor() {
        this.firestoreManager = new FirestoreManager();
        this.gpsManager = new GPSManager();
    }

    private async push() {
        const locationData: LocationData = await this.gpsManager.getLocationData();

        await this.firestoreManager.setLocationData({ collectionId: "coordinate", documentId: "current", data: locationData });
    }

    public async start() {
        /// 毎分実行
        cron.schedule("* * * * *", () => {
            this.push();
        }, { timezone: "Asia/Tokyo" });
    }
}