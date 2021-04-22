import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Marca} from '../interfaces/marcas';
@Injectable({
  providedIn: 'root'
})
export class ViewMarcasService {
  private readonly url='';

  constructor(private http:HttpClient) { }

  viewGet(){
    this.http.get<Marca[]>(this.url);
  }
}
