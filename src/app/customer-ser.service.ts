import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './food';
import { Customer } from './customer';
import { FoodDTO } from './food-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomerSerService {
  private resturl='http://localhost:8080';
  msg:String="";

  constructor(private httpClient:HttpClient ) { }

  getMenu():Observable<Food[]>
  {
    return this.httpClient.get<Food[]>(`${this.resturl}/getFoods`,{responseType:'json'});
  }

  customerorder(f:FoodDTO):Observable<Object>{
    return this.httpClient.post(`${this.resturl}/customerorder`,f,{responseType:"text"});
  
  }
  registercustomer(customer:Customer):Observable<Object>{
    return this.httpClient.post(`${this.resturl}/cus`,customer,{responseType:"text"});
  }

}
