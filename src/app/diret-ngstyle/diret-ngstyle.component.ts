import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diret-ngstyle',
  templateUrl: './diret-ngstyle.component.html',
  styleUrls: ['./diret-ngstyle.component.css']
})
export class DiretNgstyleComponent implements OnInit {
  
  active: boolean = false;
  bFontSize: number = 13;
  increase(){
    this.bFontSize++;
  }
  decrease(){
    this.bFontSize--;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
