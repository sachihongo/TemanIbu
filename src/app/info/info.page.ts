import { Component, OnInit } from '@angular/core';
import {ExploreService} from '../service/explore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  news: any;
  newsTitle: string;
  newsSubtitle: string;
  newsImageurl: string;
  newsDescription: string;


  constructor(private exploreService: ExploreService, private router: Router) { }

  ngOnInit() {
    this.exploreService.read_News().subscribe(data => {

      this.news = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Title: e.payload.doc.data()['Title'],
          Subtitle: e.payload.doc.data()['Subtitle'],
          Imageurl: e.payload.doc.data()['Imageurl'],
          Description: e.payload.doc.data()['Description'],
        };
      })
      console.log(this.news);

    });
  }

  goToInfoDetail() {
    this.router.navigate(['/infodetail']);
  }

}
