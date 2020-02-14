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

  
  ngOnInit() {
    

    ArtyomUtil.getInstance().addCommands([
      {
				indexes:["leer ingredientes", 'atrás', 'inicio', 'alto', 'siguiente', 'anterior', 'ingredientes', 'preparación', 'leer paso','leer pasó' ],
				action: (i) => {
          if(i==0){
            console.log('entro a leer ingredientes', this.receta);
            ArtyomUtil.getInstance().sayArray(this.receta.ingredientes);          
          } else if (i==1 || i==2){
            window.location = '';
          } else if (i==3){
            ArtyomUtil.getInstance().getJarvis().shutUp();
          }else if (i==4){
            $('#next').click();
          } else if (i==5){
            $('#previous').click();
          } else if (i==6){
            location.href = window.location.href.split('#')[0]+"#ingredientes"
          } else if (i==7){
            location.href = window.location.href.split('#')[0]+"#pasos"
          } else if (i==8 || i==9){
            let id_c = parseInt($('.carousel-indicators').find('.active')[0].innerText);
            setTimeout(() => {
              ArtyomUtil.getInstance().say(this.receta.pasos[id_c-1].Descripcion);
              
            },400);
            
          }

          
        }
      }]);
  }

  
}
