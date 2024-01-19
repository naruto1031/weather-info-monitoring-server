import admin from 'firebase-admin';
import { LocationData } from '../model/location_data';
import serviseAccount from '../../serviceAccountKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviseAccount as admin.ServiceAccount)
});

export class FirestoreManager {
    private firestore: FirebaseFirestore.Firestore = admin.firestore();

    public async getLocationData(collection: string, id: string) {
        const doc = await this.firestore.collection(collection).doc(id).get();
        return doc.data();
    }

    public async setLocationData({ collectionId, documentId, data }: { collectionId: string, documentId: string, data: LocationData }) {
        console.log(`👑 setLocationData: { id: ${data.id}, location: (${data.location.latitude}, ${data.location.longitude}) }`);

        const field = {
            id: data.id,
            location: data.location,
        };

        await this.firestore.collection(collectionId).doc(documentId).set(field);
    }
}