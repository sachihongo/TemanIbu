import { Component, OnInit } from '@angular/core';
import {CrudService} from '../service/crud.service';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.page.html',
  styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage implements OnInit {

  // peoples: any;
  mainuser: AngularFirestoreDocument
  userPosts
  sub
  posts
  username: string

  constructor(private afs: AngularFirestore, private user: UserService, private router: Router) {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
      this.posts = event.posts
      this.username = event.username
    })
  }

  ngOnInit() {
    // this.crudService.read_Peoples().subscribe(data => {
    //
    //   this.peoples = data.map(e => {
    //     return{
    //       id: e.payload.doc.id,
    //       Name: e.payload.doc.data()['Name'],
    //       Baby: e.payload.doc.data()['Baby'],
    //       Phone: e.payload.doc.data()['Phone'],
    //       Address: e.payload.doc.data()['Address']
    //     };
    //   })
    //   console.log(this.peoples);
    // });
  }

}
