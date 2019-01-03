import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  abc = 'Header';
  arr=['qwe','xcfd','gfhgf'];
  a:number = 5; b:number=3; c=0;
  ngOnInit() {
    this.sum();
  }
  sum(){
    this.c=this.a+this.b;
  }
}
