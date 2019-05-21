import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
      private firestore: AngularFirestore
  ) { }

  create_NewPeople(record) {
    return this.firestore.collection('Peoples').add(record);
  }

  read_Peoples() {
    return this.firestore.collection('Peoples').snapshotChanges();
  }


}
