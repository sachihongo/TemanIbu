import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private user: UserService) {

  }

  userDetails() {
    return firebase.auth().currentUser;
  }

  async canActivate(route) {
    if (this.user.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser){
        firebase.auth().signOut()
            .then(() => {
              console.log("LOG Out");
              resolve();
            }).catch((error) => {
          reject();
        });
      }
    })
  }
}
