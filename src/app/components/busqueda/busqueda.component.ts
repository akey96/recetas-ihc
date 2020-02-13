import { Component, OnInit } from '@angular/core';
import { ArtyomUtil } from '../../utils/artyom.util';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  pages: any;
  recetas: any

  constructor(
    private recetasService: RecetasService
  ) { 
    this.recetasService.getAll()
        .subscribe(resp => {
          this.recetas = resp;
          
      });
  }

  ngOnInit() {
    

    setTimeout(() => {
      ArtyomUtil.getInstance().start();
    }, 250);

    ArtyomUtil.getInstance().addCommands([
      {
				indexes:['limpiar búsqueda', 'página siguiente', 'página anterior'  ],
				action: (i) => {
          if(i==0){
            $('#tabla_busqueda').dataTable().fnFilter('');
          }else if(i==1){
             $('#tabla_busqueda_next').click();
           }else if(i==2){
             $('#tabla_busqueda_previous').click();
           }else if(i==3){
            console.log("entro paginacion por numero");
          }
        }
      }]);

      ArtyomUtil.getInstance().getJarvis().redirectRecognizedTextOutput((text,isFinal) => {
        var campoSearch = $('input');
        if (isFinal) {
          text = String(text).toLowerCase();
          
          if(text.startsWith('buscar')){
            let texto = "";
            if(text.includes('receta')){
              texto = text.substr(text.search(" ")+7, text.length);
            } else {
              texto = text.substr(text.search(" ")+1, text.length);
            }
            campoSearch.val(texto);
            $('#tabla_busqueda').dataTable().fnFilter(texto);
          } else if(text.startsWith('página')){
            
            if(/\d+/.test(text)){
              let numero = parseInt(text.split(' ')[1]);
              $('#tabla_busqueda_paginate').find('span').find('a')[numero].click();
            }
          } else if(text.startsWith('abrir')){
            let palabra = "";
            let id = ""
            if(text.includes('receta')){
              let numero  = text.split(' ')[2];
              console.log('valor  ',text.split(' ')[2])
              
              // id = this.recetas[numero-1]
              // window.location = '/receta/'+id;
              // let id = Array.from(this.recetas).filter(e => e.id == palabra)[0].id
            } else {
              palabra = text.substr(text.search(" ")+1, text.length);
              id = Array.from(this.recetas).filter(e => e.nombre.toLowerCase() == palabra)[0].id;
              window.location = '/receta/'+id;
            }
            
          }
        }

      });

  }

}
// todo = $('#tabla_busqueda_paginate').find('span').find('a')[1]
// tabla_busqueda_previous
// tabla_busqueda_next