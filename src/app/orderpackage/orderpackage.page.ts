import { Component, OnInit } from '@angular/core';

import { CrudService } from './../service/crud.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orderpackage',
  templateUrl: './orderpackage.page.html',
  styleUrls: ['./orderpackage.page.scss'],
})
export class OrderpackagePage implements OnInit {

  peoples: any;
  peopleName: string;
  babyName: string;
  peoplePhone: number;
  peopleAddress: string;

  constructor(private crudService: CrudService, private router: Router) { }

  ngOnInit() {
  }

  CreateRecord() {
    const record = {};
    record['Name'] = this.peopleName;
    record['Baby'] = this.babyName;
    record['Phone'] = this.peoplePhone;
    record['Address'] = this.peopleAddress;
    this.crudService.create_NewPeople(record).then(resp => {
      this.router.navigateByUrl('/tabs/myorder');
      // this.peopleName = '';
      // this.babyName = '';
      // this.peoplePhone = undefined;
      // this.peopleAddress = '';
      // console.log(resp);
    })
        .catch(error => {
          console.log(error);
        });
  }

}
