import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl ="http://localhost:8083/capBE/";

  constructor(private HttpClient:HttpClient) { }

  getCostumerDetails():any
  {
      const searchUrl=`${this.baseUrl}getAccountsByCostumer/1`; 
   
      return this.HttpClient.get<any>(searchUrl);
  }

  addNewAccountToExistedCostumer( initialAmount:number):any
  {
      const searchUrl=`${this.baseUrl}add/newAccount/ExistingCostumer/1`; 
      let req = {
         initialCredit: initialAmount
      }
      return this.HttpClient.put<any>(searchUrl,JSON.stringify(req),{ headers :{
        'Content-Type': 'application/json'     
         }});
  }

}
