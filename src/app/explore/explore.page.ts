import {Component, OnInit, ViewChild} from '@angular/core';
import {SuperTabs, SuperTabsModule} from '@ionic-super-tabs/angular';
import {InfoPage} from '../info/info.page';
import {PromoPage} from '../promo/promo.page';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  infoPage = InfoPage;
  promoPage = PromoPage;

  constructor() { }

  ngOnInit() {
  }

}
