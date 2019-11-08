import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products: Array<Product> =
  [
   {
   name: 'Fossil F5061',
   price: 10000,
   image: 'https://rukminim1.flixcart.com/image/495/594/jtx9evk0/watch/x/w/g/fs5061-fossil-original-imaff5tqv5jqbkbg.jpeg?q=50',
   description: 'watch',
   imageAlt: '',
   isAvailable: false
   },
   {
     name: 'macbook air',
     price: 55000,
     image: 'https://rukminim1.flixcart.com/image/495/594/jtx9evk0/watch/x/w/g/fs5061-fossil-original-imaff5tqv5jqbkbg.jpeg?q=50',
     description: 'from Apple',
     imageAlt: '',
     isAvailable: true
   },
   {
       name: 'watch',
       price: 75000,
       image: 'https://rukminim1.flixcart.com/image/495/594/jtx9evk0/watch/x/w/g/fs5061-fossil-original-imaff5tqv5jqbkbg.jpeg?q=50',
       description: 'iphone11 -newest addition to iphone family',
       imageAlt: '',
       isAvailable: false
   },
   {
       name: 'iphone',
         price: 75000,
         image: 'https://rukminim1.flixcart.com/image/495/594/jxgflow0/watch/f/f/p/1-1901d-jacques-lemans-original-imafhvryzwjhzwdp.jpeg?q=50',
         description: 'iphone11 -newest addition to iphone family',
         imageAlt: '',
         isAvailable: false
   },
   {
           name: 'iphone',
           price: 75000,
           image: 'https://rukminim1.flixcart.com/image/495/594/k02qnww0/watch/v/a/4/ex505-casio-original-imafjxzjyzwhzfrt.jpeg?q=50',
           description: 'iphone11 -newest addition to iphone family',
           imageAlt: '',
           isAvailable: true
   },
   {
     name: 'iphone',
     price: 75000,
     image: 'https://rukminim1.flixcart.com/image/495/594/k02qnww0/watch/p/u/c/ed475-casio-original-imafjxzjmnf2hugp.jpeg?q=50',
     description: 'iphone11 -newest addition to iphone family',
     imageAlt: '',
     isAvailable: false
   },
   {
     name: 'iphone',
     price: 75000,
     image: 'https://rukminim1.flixcart.com/image/495/594/jmxrwy80/watch/e/e/w/g736-casio-original-imaeykdxegwfrcgv.jpeg?q=50',
     description: 'iphone11 -newest addition to iphone family',
     imageAlt: '',
     isAvailable: true
   },
   {
 name: 'iphone',
 price: 75000,
 image: 'https://rukminim1.flixcart.com/image/495/594/jmxrwy80/watch/e/e/w/g736-casio-original-imaeykdxegwfrcgv.jpeg?q=50',
 description: 'iphone11 -newest addition to iphone family',
 imageAlt: '',
 isAvailable: false
   },
 {
 name: 'iphone',
 price: 75000,
 image: 'https://rukminim1.flixcart.com/image/495/594/jmxrwy80/watch/e/e/w/g736-casio-original-imaeykdxegwfrcgv.jpeg?q=50',
 description: 'iphone11 -newest addition to iphone family',
 imageAlt: '',
 isAvailable: false
   }
  ]

}
