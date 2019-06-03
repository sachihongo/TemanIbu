import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userEmail: string;

  constructor(private menuCtrl: MenuController, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.userDetails()) {
      this.userEmail = this.authService.userDetails().email;
      console.log(this.userEmail);
    }
  }

}
