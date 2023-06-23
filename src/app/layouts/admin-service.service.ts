import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { catchError, identity, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  saveUser(data:any){
    return this.http.post(environment.BASE_URL + 'admin/save',data)
   }

}
