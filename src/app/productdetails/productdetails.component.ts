import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
@Input() item;
@Output() isDeleted = new EventEmitter();
  constructor(private route: ActivatedRoute,
              private productservice: ProductsService,
              private Route2: Router) { }
  selectedProduct;
  id;

  ngOnInit() {
    this.route.params.subscribe (params => {
      this.id = +params.id;
      console.log(this.id);
      this.productservice.onEdit(this.id).subscribe(Response => {
        this.selectedProduct = Response;
        if (this.id) {
          this.item = this.selectedProduct;
          console.log(this.item);
        }
      });
    });
  }
  delete(selectedId) {
    if (confirm('Are you sure about deleting this product')) {
      this.productservice.deleteProduct(selectedId).subscribe(Response => {
            this.isDeleted.emit('deleted');
        //  this.Route2.navigate(['']);
      });
    } else {
      alert('cancelled');
    }
  }
 
}
