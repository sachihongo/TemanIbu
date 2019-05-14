import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listpackage',
  templateUrl: './listpackage.page.html',
  styleUrls: ['./listpackage.page.scss'],
})
export class ListpackagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailpackage() {
    this.router.navigateByUrl('/detailpackage');
  }

}
