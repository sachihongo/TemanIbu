import { Component, OnInit } from '@angular/core';
import {CrudService} from '../service/crud.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.page.html',
  styleUrls: ['./myorder.page.scss'],
})
export class MyorderPage implements OnInit {

  peoples: any;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Peoples().subscribe(data => {

      this.peoples = data.map(e => {
        return{
          id: e.payload.doc.id,
          Name: e.payload.doc.data()['Name'],
          Baby: e.payload.doc.data()['Baby'],
          Phone: e.payload.doc.data()['Phone'],
          Address: e.payload.doc.data()['Address']
        };
      })
      console.log(this.peoples);
    });
  }

}
