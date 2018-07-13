import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticulosService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("http://localhost/SampleWS/peoples");
  } 
}
