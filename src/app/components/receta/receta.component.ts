import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';
// import { ArtyomService } from '../../services/artyom.service';
import { ArtyomUtil } from '../../utils/artyom.util';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {
  receta: any;
  recetaSelected: string;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recetasService: RecetasService ){

      this.route.paramMap.subscribe(params => {
        if (params.has("id")) {
          this.recetaSelected = params.get('id');
          this.recetasService.getAll()
            .subscribe(resp => {
              this.receta = Array.from(resp).filter(rec => rec.id==this.recetaSelected)[0];
          });
        }
      });
    }

  leerIngredientes(){
    let ingredientes = Array.from(this.receta.ingredientes);
    for(let i=0; i<ingredientes.length; i++){
      ArtyomUtil.getInstance().getJarvis().say(ingredientes[i]);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      ArtyomUtil.getInstance().start();
    }, 250);

    ArtyomUtil.getInstance().addCommands([
      {
				indexes:["leer ingredientes", 'atrás', 'alto'],
				action: (i) => {
          if(i==0){
            console.log('entro a leer ingredientes', this.receta);
            ArtyomUtil.getInstance().sayArray(this.receta.ingredientes);          
          } else if (i==1){
            window.location = '';
          } else if (i==2){
            ArtyomUtil.getInstance().getJarvis().shutUp();
          }
          
        }
      }]);
  }

  
}
