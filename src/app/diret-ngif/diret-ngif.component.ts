import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diret-ngif',
  templateUrl: './diret-ngif.component.html',
  styleUrls: ['./diret-ngif.component.css']
})
export class DiretNgifComponent implements OnInit {
  
  fishs: string[] = ["Sardine", "Salmon", "Tuna"];
  key: boolean = true;
  
  showFishes(){
    this.key = true;
  }
  hideFishes(){
    this.key = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
