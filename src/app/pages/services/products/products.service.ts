import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../constant/constant';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(API + 'GetAllProducts');
  }
}
