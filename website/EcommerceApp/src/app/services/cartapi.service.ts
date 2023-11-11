import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
  cartDataList:any = [];
  productList = new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product)
  }

  addToCart(product: any) {
    const existingProduct = this.cartDataList.find((p: any) => p.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartDataList.push({ ...product, quantity: 1 });
    }
  
    this.productList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList);
  }
  

  getTotalAmount(){
    let grandTotal = 0;
    this.cartDataList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

  removeCartData(product: any) {
    const index = this.cartDataList.findIndex((a: any) => product.id === a.id);
  
    if (index !== -1) {
      if (this.cartDataList[index].quantity > 1) {
        this.cartDataList[index].quantity -= 1;
      } else {
        this.cartDataList.splice(index, 1);
      }
    }
  
    this.productList.next(this.cartDataList);
  }
  


  removeAllCart(){
    this.cartDataList = []
    this.productList.next(this.cartDataList)
  }

}
