import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(public menuCtrl: MenuController, public user: UserService, public afAuth: AngularFireAuth, public router: Router) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async login(form) {
    const { email, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email + '', password + '');

      if (res.user) {
        this.user.setUser({
          email,
          uid: res.user.uid
        })
        this.router.navigate(['/tabs/home']);
      }

    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('User not found');
      }
    }
  }

}
