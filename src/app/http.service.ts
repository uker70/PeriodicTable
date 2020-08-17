import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Element } from './elements/element'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpDataApi: HttpClient) { }

  GetApiData(){

    return this.httpDataApi.get<Element[]>('https://neelpatel05.pythonanywhere.com');
  }
}
