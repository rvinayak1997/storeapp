import { Injectable } from '@angular/core';
import { Product } from '../Model/model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  actionUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getProducts() {
    // return this.products;
    return this.http.get(this.actionUrl + '/product');
  }
  add(pro: Product) {
    // this.products.push(pro);
   return  this.http.post(this.actionUrl + '/product', pro);
  }
  onEdit(id) {
    return this.http.get(this.actionUrl + '/product/' + id);
  }
  update(id, form) {
    return this.http.put(this.actionUrl + '/product/' + id, form);
  }
  deleteProduct(id) {
    return this.http.delete(this.actionUrl + '/product/' + id);
  }
  }
