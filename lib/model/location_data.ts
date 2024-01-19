export class LocationData {
    public id: number;
    public location: FirebaseFirestore.GeoPoint;

    constructor(id: number, location: FirebaseFirestore.GeoPoint) {
        this.id = id;
        this.location = location;
    }
}