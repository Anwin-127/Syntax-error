import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable } from 'rxjs';



export interface Product {
  id?: number;
  quantity?: number;
  total?: number;
  description?: string;
}


@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private db: AngularFirestore) {}

  private username = new BehaviorSubject<string>('');  // Default value is an empty string
  currentName = this.username.asObservable();
  data:any;
  

  changeName(newName: string) {
    this.username.next(newName);
  }

  getAllUsers() {
    return new Promise<any>((resolve)=> {
      this.db.collection('users').valueChanges().subscribe(users => resolve(users));
    })
}

// getData(email:string): string{
//     this.db.doc(`users/${email}`).get().subscribe(async ref => {
//       if(!ref.exists){
//         console.log("No Documents within current username!");
//       }
//       else{
//         const doc:any = await ref.data();
//         // this.data = doc.products;
//         this.data = JSON.stringify(doc);
//         console.log(this.data)
       
//       }
//     })

//     return this.data;

//   }

  getData(email:string){
    return this.db.doc(`users/${email}`);

  }
  // getData(email: string): Observable<string> {
  //   return new Observable(observer => {
  //     this.db.doc(`users/${email}`).get().pipe(
  //       map(ref => {
  //      {
  //           const doc: any = ref.data();
  //           this.data = doc.products;
  //           console.log(this.data);
  //           const jsonData = JSON.stringify(this.data);
  //           console.log(jsonData);
  //           return jsonData;
  //         }
  //       }),
  //       catchError(error => {
  //         console.error('Error fetching data:', error);
  //         return '[]'; // Return an empty array as a string in case of an error
  //       })
  //     ).subscribe(data => {
  //       observer.next(data);
  //       observer.complete();
  //     });
  //   });
  // }




addNewUser(email:string, productL : any) {
  this.db.collection("users").doc(email).set({products : productL});
}

updateUserProductList(email:string , productL:any) {
  this.db.collection("users").doc(email).update({products: productL});
}

getCollectionData(): Observable<any[]> {
  return this.db.collection("users").valueChanges();
}



}
