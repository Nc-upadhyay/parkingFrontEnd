import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }
  public searchText(search:string){
    return this.httpClient.get(environment.apiUrl+"search/place/"+search);
  }
  public bookSlot(book:any ){
    return this.httpClient.post<any>(environment.apiUrl+"book-slot",book);
  }
}
