import { Injectable } from '@angular/core';
import { Product } from '../Model/model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private products: Array<Product> = [
    {
     name: 'Fossil F5061',
     price: 1000,
     image: 'https://rukminim1.flixcart.com/image/495/594/jtx9evk0/watch/x/w/g/fs5061-fossil-original-imaff5tqv5jqbkbg.jpeg?q=50',
     description: 'watch',
     imageAlt: '',
     isAvailable: true
    },
    {
      name: 'Sonata',
      price: 1899,
      image: 'https://rukminim1.flixcart.com/image/495/594/jjrgosw0/watch/z/x/e/77031nm03-sonata-original-imaf79nzhuk2whjr.jpeg?q=50',
      description: 'watch',
      imageAlt: '',
      isAvailable: true
    },
    {
        name: 'daniel klein',
        price: 3500,
        image: 'https://rukminim1.flixcart.com/image/495/594/jx3kn0w0/watch/k/h/2/dk12103-2-daniel-klein-original-imafhmuydafzydyb.jpeg?q=50',
        description: 'iphone11 -newest addition to iphone family',
        imageAlt: '',
        isAvailable: true
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
  isAvailable: true
    },
  {
  name: 'iphone',
  price: 75000,
  image: 'https://rukminim1.flixcart.com/image/495/594/jmxrwy80/watch/e/e/w/g736-casio-original-imaeykdxegwfrcgv.jpeg?q=50',
  description: 'iphone11 -newest addition to iphone family',
  imageAlt: '',
  isAvailable: true
    }
   ];
  getProducts() {
    return this.products;
  }
  add(pro: Product) {
    this.products.push(pro);
  }
}
