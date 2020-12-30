import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourService {
  private baseURL = environment.URL +'auth/cours';
  constructor(private httpClient: HttpClient) { }
  add(data): Promise<any>{
    return this.httpClient.post<any>(this.baseURL+'/add', data).toPromise();
  }
  edit(data): Promise<any>{
    return this.httpClient.post<any>(this.baseURL+'/update', data).toPromise();
  }
  findAll(): Promise<any[]>{
    return this.httpClient.get<any[]>(this.baseURL).toPromise();
  }
  delete(id): Promise<any>{
    return this.httpClient.get<any>(this.baseURL+'/delete/'+id).toPromise();
  }
  getByID(id): Promise<any>{
    return this.httpClient.get<any>(this.baseURL+'/getByID/'+id).toPromise();
  }
  getByFormation(id): Promise<any>{
    return this.httpClient.get<any>(this.baseURL+'/getByFormation/'+id).toPromise();
  }
}
