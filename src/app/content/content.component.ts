import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']

})
export class ContentComponent implements OnInit {
  products;
  constructor(public productservice: ProductsService ) { }

  ngOnInit() {
    this.productservice.getProducts().subscribe(Response =>{ this.products = Response});
  }
  deleted(event)
  {
    this.productservice.getProducts().subscribe(Response =>{ this.products = Response});
  }
 
}
