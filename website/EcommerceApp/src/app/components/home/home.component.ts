import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productList:any;
  constructor( private api:ApiService ) {}

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
    })
  }

}
