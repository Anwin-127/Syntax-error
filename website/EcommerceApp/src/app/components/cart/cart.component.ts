import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any = [];
  email:string = "";
  public allProducts: any = 0;
  constructor(private cartApi:CartapiService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.currentName.subscribe(name => {
      this.email = name;
      console.log(" username : "+name)
    });
    
    this.userService.getData(this.email).get().subscribe(ref => {
      if(!ref.exists){
        console.log("No Documents within current username!");
      }
      else{
        const doc:any =  ref.data();
        this.products = doc.products;
        console.log(this.products)
       
      }
    });
  

    // this.cartApi.getProductData().subscribe(res=>{
    
    //   this.allProducts = this.cartApi.getTotalAmount();
    // })
  }

  removeProduct(item:any){
    this.cartApi.removeCartData(this.email,item);
    console.log("deleted")
    this.ngOnInit();

  }

  removeAllProduct(){
    this.cartApi.removeAllCart(this.email);
    this.ngOnInit();
  }

}
