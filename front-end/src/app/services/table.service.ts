import { api_url } from './../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { tableModel } from '../models/table.model';

@Injectable({
  providedIn:'root'
})
export class tableService{
  constructor(private http:HttpClient){}

  get():Observable<tableModel[]>{
    return this.http.get<tableModel[]>(api_url + 'grid')
  }
}
