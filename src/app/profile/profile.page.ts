import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthService} from '../service/auth.service';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userEmail: string;

  mainuser: AngularFirestoreDocument;
  sub;
  username: String;
  // profilePic: String;

  constructor(private menuCtrl: MenuController, private authService: AuthService, private user: UserService, private router: Router, private afs: AngularFirestore) {
    this.mainuser = afs.doc(`users/${user.getUID()}`)
    this.sub = this.mainuser.valueChanges().subscribe(event => {
      this.username = event.username
      // this.profilePic = event.profilePic
    })
  }

  // ngOnInit() {
  //   if (this.authService.userDetails()) {
  //     this.userEmail = this.authService.userDetails().email;
  //     console.log(this.userEmail);
  //   }
  // }

  goTo(postID: String) {
    this.router.navigate(['/tabs/post/' + postID.split('/')[0]]);
  }

}
