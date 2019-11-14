import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm: FormGroup;
  id: number;
  private selectedProduct;
  constructor(public productservice: ProductsService, private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.myForm = new FormGroup ({
      title: new FormControl('', [ Validators.required, Validators.maxLength(20) ]),
      price: new FormControl('', [ Validators.required, Validators.pattern(/[0-9]/)]),
      description: new FormControl('', [ Validators.required, Validators.maxLength(300)]),
      imageUrl: new FormControl('', Validators.required),
      isAvailable: new FormControl(Boolean, Validators.required),
      id: new FormControl('', Validators.required),
    });
    this.route.params.subscribe(params => {
      this.id = +params.id;
      if (this.id) {
        console.log(this.id);
        this.productservice.onEdit(this.id).subscribe(Response => {
          this.selectedProduct = Response;
          this.myForm.patchValue({
            title: this.selectedProduct.title,
            id: this.selectedProduct.id,
            price: this.selectedProduct.price,
            description: this.selectedProduct.description,
            imageUrl: this.selectedProduct.imageUrl,
          });
        });
      }

    });
  }
 onSubmit(myForm) {
   console.log(this.myForm.value);
   if (this.myForm.valid) {
     if (this.id) {
       this.productservice.update(this.id, this.myForm.value).subscribe(Response => {
           alert('Product updated successfully');
           this.router.navigate(['']);
       });
     } else {
      this.productservice.add(this.myForm.value).subscribe(Response => {
        alert('Product added successfully');
        this.router.navigate(['']);
      });
     }
   } else {
    alert('invalid entry');
   }
 }

}
