import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-listpackage',
  templateUrl: './listpackage.page.html',
  styleUrls: ['./listpackage.page.scss'],
})
export class ListpackagePage implements OnInit {

  public packages = [
    {
      name: 'Gold',
      description: 'Paket Gold Anak (Pijat anak 0-12 Tahun, pemeriksaan dan stimulasi tumbuh kembang anak)',
      img: '../assets/img/gold.jpg',
      price: '50K',
      fullprice: '50.000',
      duration: '1 Jam'
    },
    {
      name: 'Platinum',
      description: 'Paket Platinum (Pijat anak 0-12 Tahun 4x dalam 1 bulan pemeriksaan dan stimulasi tumbuh kembang anak ACC Psikolog Anak)',
      img: '../assets/img/platinum.jpg',
      price: '150K',
      fullprice: '150.000',
      duration: '2 Jam'
    },
    {
      name: 'Titanium',
      description: ' Paket Titanium (Pijat anak 0-12 Tahun 4x dalam 1 bulan plus aromatheraphy pemeriksaan dan stimulasi tumbuh kembang anak ACC Psikolog Anak)',
      img: '../assets/img/titanium.jpg',
      price: '250K',
      fullprice: '250.000',
      duration: '2 Jam'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  detailpackage(pk) {
    const navigationExtras: NavigationExtras = {
      state: {
        paket: pk
      }
    };
    this.router.navigate(['detailpackage'], navigationExtras);
  }

}
