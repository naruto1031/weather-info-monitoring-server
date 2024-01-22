import cron from "node-cron";
import { FirestoreManager } from "./firestore_manager";
import { LocationData } from "../model/location_data";
import { GPSManager } from "./gps_manager";
import { Strings } from "../constant/strings";

export class CronManager {
    private firestoreManager: FirestoreManager;
    private gpsManager: GPSManager;

    private mainCron: cron.ScheduledTask = cron.schedule("* * * * *", () => {
        this.push();
    }, { scheduled: false, timezone: "Asia/Tokyo" });

    constructor() {
        this.firestoreManager = new FirestoreManager();
        this.gpsManager = new GPSManager();
    }

    private async push() {
        const locationData: LocationData = await this.gpsManager.getLocationFromGPS();

        await this.firestoreManager.setLocationData({
            collectionId: Strings.COLLECTION_ID,
            documentId: Strings.DOCUMENT_ID,
            data: locationData
        });
    }

    public async start() {
        console.log(Strings.CRON_START_TEXT);
        this.mainCron.start();
    }
}