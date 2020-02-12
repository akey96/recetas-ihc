import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent implements OnInit {
  
  @Input() receta: any;
  

  constructor() { }

  ngOnInit() {
    console.log("este es el hijo pasado por receta a ingrediente ",this.receta)
  }

}
