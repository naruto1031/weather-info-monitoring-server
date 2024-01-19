import cron from "node-cron";
import { FirestoreManager } from "./manager/firestore_manager";
import { LocationData } from "./model/location_data";
import { GPSManager } from "./manager/gps_manager";
import { Strings } from "./constant/strings";

export class Cron {
    private firestoreManager: FirestoreManager;
    private gpsManager: GPSManager;

    constructor() {
        this.firestoreManager = new FirestoreManager();
        this.gpsManager = new GPSManager();
    }

    private async push() {
        const locationData: LocationData = await this.gpsManager.getLocationData();

        await this.firestoreManager.setLocationData({ collectionId: Strings.COLLECTION_ID, documentId: Strings.DOCUMENT_ID, data: locationData });
    }

    public async start() {
        console.log(Strings.CRON_START_TEXT);

        /// 毎分実行
        cron.schedule("* * * * *", () => {
            this.push();
        }, { timezone: "Asia/Tokyo" });
    }
}