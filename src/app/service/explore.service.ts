import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor( private firestore: AngularFirestore) { }

  read_News() {
    return this.firestore.collection('News').snapshotChanges();
  }

  read_Promo() {
    return this.firestore.collection('Promo').snapshotChanges();
  }

}
