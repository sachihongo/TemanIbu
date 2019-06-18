import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = '';
  password: string = '';
  cpassword: string = '';


  constructor(public menuCtrl: MenuController,
              public afAuth: AngularFireAuth,
              public alert: AlertController,
              public router: Router,
              public afstore: AngularFirestore,
              public user: UserService,
              public alertController: AlertController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async register() {
    const { username, password, cpassword } = this;
    if (password !== cpassword) {
      this.showAlert('Error!', 'Password doesnt match');
      return console.error('Password dont match');
    }

    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '', password + '');
      console.log(res.user.uid);
      username = username.split('@')[0],

      this.afstore.doc(`users/${res.user.uid}`).set({
        username
      });


      this.user.setUser({
        username,
        uid: res.user.uid
      });


      // this.presentAlert('Success', 'You are registered!');
      this.showAlert('Register Succcess!', 'Selamat datang!');
      this.router.navigate(['/tabs/home']);
    } catch (err) {
      console.dir(err);
      this.showAlert('Error', err.message);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['OK']
    })
    await alert.present();
  }

}
