import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public avatars: Array<any>;

  avatar = [
    { title: 'Notatka 1', description: 'Opis notatki 1' },
    { title: 'Notatka 2', description: 'Opis notatki 2' },
    { title: 'Notatka 3', description: 'Opis notatki 3' }
  ];

  constructor(private router: Router) { }

  listpackage() {
    this.router.navigateByUrl('/listpackage');
  }

  soonmom() {
    this.router.navigateByUrl('/soonmom');
  }

  soonkids() {
    this.router.navigateByUrl('/soonkids');
  }
}
