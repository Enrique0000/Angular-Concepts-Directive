import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diret-ngfor',
  templateUrl: './diret-ngfor.component.html',
  styleUrls: ['./diret-ngfor.component.css']
})
export class DiretNgforComponent implements OnInit {
  
  dados: string[] = ["telefone", "senha", "nome"];

  constructor() { }

  ngOnInit(): void {
  }

}
