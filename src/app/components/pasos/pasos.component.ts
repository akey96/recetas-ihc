import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {

  @Input() receta: any;

  constructor() { }

  ngOnInit() {
  }

}
