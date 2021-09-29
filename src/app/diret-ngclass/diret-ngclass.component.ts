import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diret-ngclass',
  templateUrl: './diret-ngclass.component.html',
  styleUrls: ['./diret-ngclass.component.css']
})
export class DiretNgclassComponent implements OnInit {
  
  favorito: boolean = false;
  onClick(){
    this.favorito = !this.favorito;
  }
  constructor() { }


  ngOnInit(): void {
  }

}
