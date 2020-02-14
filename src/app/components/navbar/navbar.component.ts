import { Component, OnInit, Input } from '@angular/core';
import { ArtyomUtil } from '../../utils/artyom.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() receta: any;
  constructor() { }

  ngOnInit() {
    ArtyomUtil.getInstance().addCommands([
      {
				indexes:["tutorial", 'salir'],
				action: (i) => {
          if(i==0){
            $('#tutorial').click();       
          } else if (i==1){
            $('#cerrar').click();
          }
          
        }
      }]);
  }

}
