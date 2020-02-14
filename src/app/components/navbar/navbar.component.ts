import { Component, OnInit, Input } from '@angular/core';
import { ArtyomUtil } from '../../utils/artyom.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive: boolean;
  @Input() receta: any;
  constructor() { }

  ngOnInit() {
    this.isActive=false;
    ArtyomUtil.getInstance().addCommands([
      {
				indexes:["tutorial", 'salir tutorial'],
				action: (i) => {
          if(i==0){
            $('#tutorial').click();       
          } else if (i==1){
            $('#cerrar').click();
          }
        }
      }]);
  }
  activarMicrofono(){
    if(this.isActive){
      ArtyomUtil.getInstance().getJarvis().fatality();
      this.isActive = false;
    } else {
      setTimeout(() => {
        ArtyomUtil.getInstance().start();
        this.isActive = true;
      }, 250);
    }
  }

}
