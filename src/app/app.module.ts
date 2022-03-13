import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
@Injectable({
providedIn: 'root'
})
 
export class DocumentService {
 
constructor(private firestore: AngularFirestore) {}
 
/* Add Document */
AddDocument(document: Document) {
return new Promise<any>((resolve, reject) => {
this.firestore.collection("documents").add(document)
.then(res => {
resolve(res);
}, err => reject(err));
});
}
 
// /* Get Document */
GetDocument(id: string) {
return this.firestore.collection("documents").doc(id).snapshotChanges();
}
 
/* Get Document list */
GetDocumentList() {
return this.firestore.collection("documents").snapshotChanges();
}
 
// /* Update Document */
updateDocument(userKey, value){
return this.firestore.collection('documents').doc(userKey).set(value);
}
 
// /* Delete Document */
DeleteDocument(data) {
return this.firestore.collection("documents").doc(data.payload.doc.id)
.delete();
}
}
 