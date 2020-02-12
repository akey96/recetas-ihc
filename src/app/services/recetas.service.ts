import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  public data: any;
  constructor( private http:HttpClient ) {
    
  }
  getAll(){
    return this.http.get("../../assets/data/data.json");
  }
}
