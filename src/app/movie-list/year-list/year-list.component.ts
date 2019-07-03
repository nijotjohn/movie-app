import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.scss']
})
export class YearListComponent implements OnInit {
  @Input()
  movies: any;
  
  constructor() { }

  ngOnInit() {
    console.log("test "+this.movies);
  }

}
