import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  recetaSelected: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recetasService: RecetasService, ){ }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.recetaSelected = parseInt(params.get('id'));
        console.log(this.recetaSelected);
        this.recetasService.getAll()
          .subscribe(resp => {
            console.log(resp);
        });
      }
    });
  }
}
