import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diret-ngswitch',
  templateUrl: './diret-ngswitch.component.html',
  styleUrls: ['./diret-ngswitch.component.css']
})
export class DiretNgswitchComponent implements OnInit {
  
  searchOption: string = "home";

  constructor() { }

  ngOnInit(): void {
  }

}
