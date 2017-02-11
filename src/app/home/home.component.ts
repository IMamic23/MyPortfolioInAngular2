import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from './../data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
items: FirebaseListObservable<any[]>;
myData = [];

  constructor(private dataService: DataService, af: AngularFire) {
   this.items = af.database.list('/');
   this.items.subscribe(
    val => console.log(val)
   );
   }

  ngOnInit() {
   this.dataService.fetchData().subscribe(
    (data) => this.myData = data
    );
  }

}
