import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class CartapiService implements OnInit{
  cartDataList:any = [];
  productList = new BehaviorSubject<any>([])

  constructor(private http:HttpClient,
    private userService: UserService) {}

    ngOnInit(): void {
     
    }

  getProductData(){
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartDataList.push(...product);
    this.productList.next(product)
  }

  addToCart(email:string,product: any) {
    const existingProduct = this.cartDataList.find((p: any) => p.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartDataList.push({ ...product, quantity: 1 });
    }
    
    this.userService.updateUserProductList(email,this.cartDataList);
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

  removeCartData(email:string,product: any) {
    const index = this.cartDataList.findIndex((a: any) => product.id === a.id);
  
    if (index !== -1) {
      if (this.cartDataList[index].quantity > 1) {
        this.cartDataList[index].quantity -= 1;
      } else {
        this.cartDataList.splice(index, 1);
      }
    }
    this.productList.next(this.cartDataList);
    this.userService.updateUserProductList(email,this.cartDataList);
  }
  


  removeAllCart(email:string){
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
    this.userService.updateUserProductList(email,this.cartDataList);
  }

}
