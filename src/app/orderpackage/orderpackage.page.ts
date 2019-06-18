import { Component, OnInit } from '@angular/core';

import { CrudService } from './../service/crud.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../service/user.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Component({
  selector: 'app-orderpackage',
  templateUrl: './orderpackage.page.html',
  styleUrls: ['./orderpackage.page.scss'],
})
export class OrderpackagePage implements OnInit {
  myDate = new Date().toISOString();

  peoples: any;
  peopleName: string;
  babyName: string;
  peoplePhone: number;
  peopleAddress: string;
  peopleCity: string;
  author: string;

  od: any;

  constructor(private crudService: CrudService, private router: Router, private route: ActivatedRoute, public user: UserService, public afstore: AngularFirestore) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.od = this.router.getCurrentNavigation().extras.state.order;
        console.log(this.od);
      }
    });
  }

  ngOnInit() {
  }

  // CreateRecord() {
  //   const record = {};
  //   record['Name'] = this.peopleName;
  //   record['Baby'] = this.babyName;
  //   record['Phone'] = this.peoplePhone;
  //   record['Address'] = this.peopleAddress;
  //   this.crudService.create_NewPeople(record).then(resp => {
  //     this.router.navigateByUrl('/tabs/myorder');
  //     // this.peopleName = '';
  //     // this.babyName = '';
  //     // this.peoplePhone = undefined;
  //     // this.peopleAddress = '';
  //     // console.log(resp);
  //   })
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }

  CreateRecord() {
    const record = {};
    record['Name'] = this.peopleName;
    record['Baby'] = this.babyName;
    record['Phone'] = this.peoplePhone;
    record['Address'] = this.peopleAddress;
    record['City'] = this.peopleCity;
    record['Paket'] = this.od;
    record['Date'] = this.myDate;
    record['Author'] = this.user.getUsername(this.author);

    const paket = this.od;

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      posts: firestore.FieldValue.arrayUnion(`${paket}`)
    })

    this.afstore.doc(`posts/${paket}`).set(record).then(resp => {
        this.router.navigateByUrl('/tabs/myorder');
        // this.peopleName = '';
        // this.babyName = '';
        // this.peoplePhone = undefined;
        // this.peopleAddress = '';
        // console.log(resp);
      })

    // this.crudService.create_NewPeople(record).then(resp => {
    //   this.router.navigateByUrl('/tabs/myorder');
    //   // this.peopleName = '';
    //   // this.babyName = '';
    //   // this.peoplePhone = undefined;
    //   // this.peopleAddress = '';
    //   // console.log(resp);
    // })
        .catch(error => {
          console.log(error);
        });
  }

  updateMyDate(date) {
    console.log(date.detail.value);
    console.log(this.myDate);
  }

}
