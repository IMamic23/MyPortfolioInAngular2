import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from './../data.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
myData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  this.dataService.fetchData().subscribe(
    (data) => this.myData = data
    );
  }

}
