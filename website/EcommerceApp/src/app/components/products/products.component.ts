import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productList:any;
  constructor( private api:ApiService ) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
    })
  }

}
