import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-detailpackage',
  templateUrl: './detailpackage.page.html',
  styleUrls: ['./detailpackage.page.scss'],
})
export class DetailpackagePage implements OnInit {

  data: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.paket;
        console.log('Data pada hal detail package:', this.data);
      }
    });
  }

  ngOnInit() {
  }

  orderdetail(datas) {
    const navigationExtras: NavigationExtras = {
      state: {
        order: datas
      }
    };
    console.log('datas parsing: ', datas);
    this.router.navigate(['orderpackage'], navigationExtras);
  }
}
