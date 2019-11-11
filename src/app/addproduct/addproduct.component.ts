import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  myForm: FormGroup;
  constructor(public productservice: ProductsService) { }
  ngOnInit() {
    this.myForm = new FormGroup ({
        name: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        description: new FormControl('', Validators.maxLength(300)),
        image: new FormControl('', Validators.required),
        imageAlt: new FormControl(''),
        isAvailable: new FormControl(Boolean, Validators.required),
    });
  }
 onSubmit() {
   console.log(this.myForm.value);
   if (this.myForm.valid) {
     this.productservice.add(this.myForm.value);
   }
   else {
    alert("invalid entry");
   }
 }
}
