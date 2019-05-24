import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mainNav : {label:string, url:string}[];

  constructor() { }

  ngOnInit() {
    this.mainNav= [
      {label:"Home", url:"/home"},
      {label:"About", url:"/about"},
      {label:"Movies", url:"/movies"},
      {label:"Actor", url:"/actors"},
    ]
  }

}


