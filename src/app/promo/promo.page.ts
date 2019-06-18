import { Component, OnInit } from '@angular/core';
import {ExploreService} from '../service/explore.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-promo',
  templateUrl: './promo.page.html',
  styleUrls: ['./promo.page.scss'],
})
export class PromoPage implements OnInit {
  promo: any;
  promoTitle: string;
  promoImageurl: string;
  promoDescription: string;
  promoCode: string;
  promoDiscount: number;

  constructor(private exploreService: ExploreService, private router: Router) { }

  ngOnInit() {
    this.exploreService.read_Promo().subscribe(data => {

      this.promo = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Title: e.payload.doc.data()['Title'],
          Imageurl: e.payload.doc.data()['Imageurl'],
          Description: e.payload.doc.data()['Description'],
          Code: e.payload.doc.data()['Code'],
          Discount: e.payload.doc.data()['Discount'],
        };
      })
      console.log(this.promo);

    });
  }

  goToPromoDetail() {
    this.router.navigate(['/promodetail']);
  }

}
