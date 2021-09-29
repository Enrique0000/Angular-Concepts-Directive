import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {
  task: any = {
    description: "Today i need to learn more about information systems",
    responsible: {
      user: null
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
