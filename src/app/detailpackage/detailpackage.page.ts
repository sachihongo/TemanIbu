import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detailpackage',
  templateUrl: './detailpackage.page.html',
  styleUrls: ['./detailpackage.page.scss'],
})
export class DetailpackagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  orderdetail() {
    this.router.navigateByUrl('/orderpackage');
  }
}
