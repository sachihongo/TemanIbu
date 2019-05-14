import { Component } from '@angular/core';

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
}
