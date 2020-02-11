import { Component } from '@angular/core';

import Artyom from 'artyom.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recetas-ihc';
  jarvis = new Artyom();

  constructor(){
    this.jarvis.say("Hello World !");
  }

}
