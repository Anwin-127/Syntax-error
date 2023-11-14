import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  email: string = "";
  totalItemNumber:number = 0;
  constructor(private userService:UserService) {}

  ngOnInit(): void {
    // this.cartApi.getProductData().subscribe(res=>{
    //   this.totalItemNumber = res.length;
    // })
    this.userService.currentName.subscribe(name => {
      if (name === null) {}
      else { this.email = name; }
      console.log("username at header : " + name)
    });

    this.userService.getData(this.email).get().subscribe(ref => {
      if(!ref.exists){
        console.log("No Documents within current username!");
      }
      else{
        const doc:any =  ref.data();
        this.totalItemNumber = doc.products.length;
        console.log(this.totalItemNumber)
      }
    });
  }

  onClick(){
    this.ngOnInit();
  }
}
