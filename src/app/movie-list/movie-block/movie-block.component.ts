import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss']
})
export class MovieBlockComponent implements OnInit {

  @Input()
  myMovie : any;
  myIndex = -1;

  constructor() { }

  ngOnInit() {
    console.log('something got', this.myMovie);
  }

  getMoreDetails(index){
    this.myIndex = this.myIndex !=index? index : -1;
  }
}
