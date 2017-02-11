import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { DataService } from './../data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
myData = [];
 constructor(private dataService: DataService) { }

  ngOnInit() {
  this.dataService.fetchData().subscribe(
    (data) => this.myData = data
    );
  }

}
