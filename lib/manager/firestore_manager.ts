import { initializeApp } from 'firebase/app';
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv'

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

export class FirestoreManager {
    private firestore: any;

    FirestoreManager() {
        const app = initializeApp(firebaseConfig);
        this.firestore = admin.firestore(app);
    }

    async getDocument(collection: string, id: string) {
        const doc = await this.firestore.collection(collection).doc(id).get();
        return doc.data();
    }

    async setDocument(collection: string, id: string, data: any) {
        const doc = await this.firestore.collection(collection).doc(id).set(data);
        return doc;
    }

    async updateDocument(collection: string, id: string, data: any) {
        const doc = await this.firestore.collection(collection).doc(id).update(data);
        return doc;
    }
}