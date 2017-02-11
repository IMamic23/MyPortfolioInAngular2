import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from './../data.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {
myData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  this.dataService.fetchData().subscribe(
    (data) => this.myData = data
    );
  }

}
