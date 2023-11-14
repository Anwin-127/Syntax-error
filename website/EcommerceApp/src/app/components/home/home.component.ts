import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = "";
  productList: any;

  constructor(private api: ApiService,
    private cartApi: CartapiService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentName.subscribe(name => {
      if (name === null) {}
      else { this.email = name; }
      console.log("new username : " + name)
    });


    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price })
      });
    })

  }



  addToCart(item: any) {
    this.cartApi.addToCart(this.email, item);
  }


}
